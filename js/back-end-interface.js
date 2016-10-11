var Alarm = function(hour, minute) {
  this.hour = hour;
  this.minute = minute;
}

Alarm.prototype.compareTime = function() {
  var currentHour = parseInt(moment().format("h"));
  var currentMinute = parseInt(moment().format("mm"));
  if(this.hour === currentHour && this.minute === currentMinute) {
    alert("alarm!");
    this.hour = "";
    this.minute = "";
  } else {
    console.log("Not yet");
  }
}

exports.alarmModule = Alarm;
