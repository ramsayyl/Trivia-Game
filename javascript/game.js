var answers = ["A","C","B"],
    tot = answers.length;

var totalSeconds = 10;
var seconds = parseInt(totalSeconds%60);

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName );
    console.log(radios); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) {
        return radios[y].value; // return the checked value
      }
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
  return score;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ tot);
}

function checkTime() {
  document.getElementById("time-left").innerHTML = "Time Left: " + seconds;

  if(totalSeconds == 0) {
    returnScore();
  } else {
    totalSeconds -= 1;
    seconds = parseInt(totalSeconds%60);
    setTimeout("checkTime()", 1000);
  }
}
setTimeout("checkTime()", 1000);


$("#submit").on("click", function () {
  returnScore();
})
