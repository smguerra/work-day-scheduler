<!DOCTYPE html>
<html lang="en-gb">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>Work Day Scheduler</title>
  </head>

  <body>
    <header class="jumbotron">
      <h1 class="display-3">Work Day Scheduler</h1>
      <p class="lead">A simple calendar app for scheduling your work day</p>
      <p id="currentDay" class="lead"></p>
    </header>
    <div class="container">
      <!-- Timeblocks go here -->
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="./assets/script/index.js"></script>
  </body>
</html>

body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1;
  }
  
  textarea {
    background: transparent;
    border: none;
    resize: none;
    color: #000000;
    border-left: 1px solid black;
    padding: 10px;
  }
  
  .jumbotron {
    text-align: center;
    background-color: transparent;
    color: black;
    border-radius: 0;
    border-bottom: 10px solid black;
  }
  
  .description {
    white-space: pre-wrap;
  }
  
  .time-block {
    text-align: center;
    border-radius: 15px;
  }
  
  .row {
    white-space: pre-wrap;
    height: 80px;
    border-top: 1px solid white;
  }
  
  .hour {
    background-color: #ffffff;
    color: #000000;
    border-top: 1px dashed #000000;
  }
  
  .past {
    background-color: #d3d3d3;
    color: white;
  }
  
  .present {
    background-color: #ff6961;
    color: white;
  }
  
  .future {
    background-color: #77dd77;
    color: white;
  }
  
  .saveBtn {
    border-left: 1px solid black;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #06aed5;
    color: white;
  }
  
  .saveBtn i:hover {
    font-size: 20px;
    transition: all 0.3s ease-in-out;
  }

  
  var today = moment();

  function displayTime() {
      var dayWeek = today.format("dddd, MMMM Do")
      $("#currentDay").text(dayWeek);
    };
   
  displayTime();
  
  