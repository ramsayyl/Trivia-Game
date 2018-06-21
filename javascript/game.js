  var answers = ["C","C","B","A","D"],
      tot = answers.length;

  var totalSeconds = 30;
  var seconds = parseInt(totalSeconds%60);

  function getCheckedValue(radioName){
      var radios = document.getElementsByName(radioName);
      for(var y = 0; y < radios.length; y++){
        if(radios[y].checked) {
          return radios[y].value;
        }
      }
  }

  function getScore(){
    var score = 0;
    for (var i = 0; i < tot; i++) {
      if(getCheckedValue("question" + i) === answers[i]) {
      score += 1;
      }
    }
    return "You answered " + score + "/5 questions correct";
  }

  function returnScore(){
    document.getElementById("results").innerHTML = getScore();
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
    clearInterval(seconds);
  });
