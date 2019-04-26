/*calculate Speed*/
function calculateSpeed()
{
    var userNameInput = document.getElementById("userNameInput");
    var distanceElement = document.getElementById("distanceInput");
    var timeElement = document.getElementById("timeInput");
    
    var distance = parseInt(distanceElement.value);
    var time = parseInt(timeElement.value);
    var speed = distance / time;
  
    var result = "Result: Speed of user  " + userNameInput.value + "  is  " + speed + " km/h ";
  
    /*Entering value in text*/
    var resultText = document.getElementById("resultText");
    resultText.innerHTML = result;
    
    /*Entering the value in the resultChart*/
    var resultChart = document.getElementById("resultChart");
    var pchartElement = document.createElement("p");
    pchartElement.innerHTML =  "Chart (Time - Distance )";
    resultChart.appendChild(pchartElement);

    for (var index = 0; index < time; index++)
    {
      var speedInsideForLoop = (index * speed);
      var pElement = document.createElement("p");
      pElement.innerHTML =  index + "   hr  -  " + speedInsideForLoop + "  km";
      resultChart.appendChild(pElement);
    }
}
/*clear calculation*/
function clearCalculation() 
{
    var resultText = document.getElementById("resultText");
    var resultChart = document.getElementById("resultChart");
    resultText.innerHTML = "";
    resultChart.innerHTML = "";
}


/* create event listeners  */
function createEventListeners()
{
    var calculatebutton = document.getElementById("calculateBtn");    
    var clearbutton = document.getElementById("clearBtn");    

    // add buttons listeners here
    if (calculatebutton.addEventListener)
      {
        calculatebutton.addEventListener("click", calculateSpeed, false); 
      } 
      else if (calculatebutton.attachEvent)
      {
        calculatebutton.attachEvent("onclick", calculateSpeed);
      }
   
      if (clearbutton.addEventListener)
      {
        clearbutton.addEventListener("click", clearCalculation, false); 
      }
      else if (clearbutton.attachEvent)
      {
        clearbutton.attachEvent("onclick", clearCalculation);
      }   
}
/* run setup functions when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}