// var timeDisplayEl = $('#currentDay');
// // handle displaying the time

var today = moment();

function displayTime() {
    var dayWeek = today.format("dddd, MMMM Do")
    $("#currentDay").text(dayWeek);
  };
 
displayTime();

