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
