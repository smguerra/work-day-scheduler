
  





























  // save event to local storage when save button is clicked
  $(".saveBtn").on("click", function() {
    let event = $(this).siblings("textarea").val();
    let hour = $(this).siblings(".hour").text();
    localStorage.setItem(hour, event);
  });
  
  $(".saveBtn").on("click", function () {
    let saveInput = $("textarea").val();
    localStorage.setItem("text", saveInput);

})
  // retrieve events from local storage and display in textarea
  $(".description").each(function() {
    let hour = $(this).siblings(".hour").text();
    let event = localStorage.getItem(hour);
    $(this).val(event);
  });
  

  