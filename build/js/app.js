(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./../js/back-end-interface.js":1,"./../js/time-interface.js":2}]},{},[3]);
