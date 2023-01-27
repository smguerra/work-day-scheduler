//Display the current day at the top of the calender when a user opens the planner.

let currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);



