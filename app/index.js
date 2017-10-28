// index.js
// Last modified by: Aimun Khan
// This is basically our main
// Monitors heartbeat
// Adding: Polls heartbeat and checks if larger than initial

/**********Set up Stuff**********/
import { Accelerometer } from "accelerometer";
import { Barometer } from "barometer";
import document from "document";
import { HeartRateSensor } from "heart-rate";

console.log("App Started");

let accelData = document.getElementById("accel-data");
let barData = document.getElementById("bar-data");
let hrmData = document.getElementById("hrm-data");
let accel = new Accelerometer();
let hrm = new HeartRateSensor();

let lastValueTimestamp = Date.now();    // Keep a timestamp of the last reading received. Start when the app is started.

/**********Functions**********/
// This was written for us - turns data into a string
// Doesn't log over time so we're gonna rewrite this
// Probably don't need the stringify stuff
function refreshData() {
  let data = {
    accel: {
      x: accel.x ? accel.x.toFixed(1) : 0,
      y: accel.y ? accel.y.toFixed(1) : 0,
      z: accel.z ? accel.z.toFixed(1) : 0
    },
    hrm: {
      heartRate: hrm.heartRate ? hrm.heartRate : 0
    }
  };

  accelData.innerText = JSON.stringify(data.accel);
  hrmData.innerText = JSON.stringify(data.hrm);
}

// This function takes a number of milliseconds and returns a string
// such as "5min ago".
// I don't know if we need this
function convertMsAgoToString(millisecondsAgo) {
  if (millisecondsAgo < 120*1000) {
    return Math.round(millisecondsAgo / 1000) + "s ago";
  }
  else if (millisecondsAgo < 60*60*1000) {
    return Math.round(millisecondsAgo / (60*1000)) + "min ago";
  }
  else {
    return Math.round(millisecondsAgo / (60*60*1000)) + "h ago"
  }
}

// This function updates the label on the display that shows when data was last updated.
function updateDisplay() {
  if (lastValueTimestamp !== undefined) {
    updatedLabel.innerText = convertMsAgoToString(Date.now() - lastValueTimestamp);
  }
}

// Create a new instance of the HeartRateSensor object
var hrm = new HeartRateSensor();

// Declare an event handler that will be called every time a new HR value is received.
// Need to modify this, all this does it put it on the display
hrm.onreading = function() {
  // Peek the current sensor values
  console.log("Current heart rate: " + hrm.heartRate);
  hrLabel.innerText = hrm.heartRate;
  lastValueTimestamp = Date.now();
}


/**********Main**********/
// Begin monitoring the sensors
accel.start();
hrm.start();

//refreshData();
setInterval(refreshData, 1000);     // Get new data every second
setInterval(updateDisplay, 500);    // Update the display every 0.5s
