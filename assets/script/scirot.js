// create timeblocks for standard business hours (9am - 5pm)
for (let i = 9; i < 17; i++) {
    // create a row for each hour
    let row = $("<div>").addClass("row time-block");
    // add hour label
    let hour = $("<div>")
      .addClass("col-2 hour")
      .text(`${i}:00`);
    // add event input field
    let event = $("<textarea>").addClass("col-8 description");
    // add save button
    let save = $("<button>")
      .addClass("col-2 saveBtn")
      .html("<i class='fas fa-save'></i>");
  
    // append elements to row
    row.append(hour, event, save);
    // append row to container
    $(".container").append(row);
  
    // check if current time is past, present, or future
    let currentTime = moment().hours();
    if (i < currentTime) {
      row.addClass("past");
    } else if (i === currentTime) {
      row.addClass("present");
    } else {
      row.addClass("future");
    }
  }
  
  // save event to local storage when save button is clicked
  $(".saveBtn").on("click", function() {
    let event = $(this)
      .siblings("textarea")
      .val();
    let hour = $(this)
      .siblings(".hour")
      .text();
    localStorage.setItem(hour, event);
  });
  
  // retrieve events from local storage and display in textarea
  $(".description").each(function() {
    let hour = $(this)
      .siblings(".hour")
      .text();
    let event = localStorage.getItem(hour);
    $(this).val(event);
  });
  
  
  