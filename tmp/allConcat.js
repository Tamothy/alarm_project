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

$(document).ready(function(){
  window.setInterval(function(){
    $('#clock').text(moment().format('h:mm:ss a'));
    var currentHour = parseInt(moment().format("h"));
    var currentMinute = parseInt(moment().format("mm"));
    var currentTime = new Time(currentHour, currentMinute);
  }, 1000);
});

var Time = function(hour, minute) {
  this.hour = hour;
  this.minute = minute;
}

exports.timeModule = Time;

var Time = require('./../js/time-interface.js').timeModule;
var Alarm = require('./../js/back-end-interface.js').alarmModule;

var alarm;

$(document).ready(function(){
  $("#alarm").submit(function(event){
    event.preventDefault();
    var hour = parseInt($("#set-hour").val());
    var minute = parseInt($("#set-minute").val());
    alarm = new Alarm(hour, minute);
    window.setInterval(function(){
      alarm.compareTime();
    }, 1000);
    // var alarm_result = alarm.compareTime();
    // console.log(alarm_result);
  });
});
