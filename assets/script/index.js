//Display the current day at the top of the calender when a user opens the planner.

let container = $(".container");
let currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

for (let i = 9; i < 18; i++) {


//create a row for each hour and add classes

let row = $("<div>").addClass("row time-block");
$(row).attr("id","hour-" + [i]);

//create a hour div to show hour from 9 am and add classes

let hour = $("<div>").addClass("col-1 hour hour-" + [i]).text([i]);


// create a textarea element for data input and add classes

let input = $("<textarea>").addClass("col-10 description");

//create a button element to save input from user and add classes and icon

let button = $("<button>").addClass("col-1 btn saveBtn fas fa-save");

//append hour, input and button to the whole row 

row.append(hour, input, button);

//append row to "main" div container 

container.append(row);

let currentHour = moment().hours();

//console.log(currentHour);

//add classes of past, present and future to the row div

if (i < currentHour) {

    row.addClass("past");

} else if (i === currentHour) {

    row.addClass("present");

} else {

    row.addClass("future");
};

};

//Save the event in local storage when the save button is clicked in that timeblock.

$(".saveBtn").on("click", function () {
    let saveInput = $(this).siblings("textarea").val();
    //let saveInput = $("textarea").val();
    let time = $(this).parent().attr("id")
    localStorage.setItem(time, saveInput);
});

//Persist events between refreshes of a page
//retrieve the value stored in the browser's local storage with the key "hour-9" 
//and sets it as the value of the textarea inside the element with an id of "hour-9"


$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


  



