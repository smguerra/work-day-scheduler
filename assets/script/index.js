// var timeDisplayEl = $('#currentDay');
// // handle displaying the time

//Display the current day at the top of the calender when a user opens the planner.

var today = moment();

function displayTime() {
    var dayWeek = today.format("dddd, MMMM Do");
    $("#currentDay").text(dayWeek);
  };
 
displayTime();

