//Display the current day at the top of the calender when a user opens the planner.

let container = $(".container");
let currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

for (let i = 9; i < 18; i++) {

//create a row for each hour and add classes

let row = $("<div>").addClass("row time-block");

//create a hour div to show hour from 9 am and add classes

let hour = $("<div>").addClass("col-1 hour");

// create a textarea element for data input and add classes

let input = $("<textarea>").addClass("col-10 description");

//create a button element to save input from user and add classes

let button = $("<button>").addClass("col-1 saveBtn");

//append hour, input and button to the whole row 

row.append(hour, input, button);

//append row to "main" div container 

container.append(row);

let currentHour = moment().hour();

console.log(currentHour);

if (i < currentHour) {
    row.addClass("past");
} else if (i === currentHour) {
    row.addClass("present");
} else {
    row.addClass("future");
};

}
// function currentHour () {
//     let row = $(".row");

//     for (let i = 9; i < 18; i++) {
//     };
//     return currentHour();
// };





