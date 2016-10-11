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
