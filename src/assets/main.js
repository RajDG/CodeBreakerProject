let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    //add functionality to guess function here
    if (answer.value == '' || attempt.value == '') {
      setHiddenFields();
    }

    if (!validateInput(input.value)){
      return;
    }
    attempt.value++;

    if (getResults(input.value)){
      setMessage("You Win! :)");
    } else if (attempt.value > 9) {
      setMessage("You Lose! :(");
    } else {
      setMessage("Incorrect, try again.");
    }
}

//implement new functions here
function showAnswer(success){
  let code = document.getElementById('code');
  if (success){
    code.ClassName += " success";
  } else {
    code.ClassName += " failure";
  }
}

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();

  while(answer.value.length < 4) {
    answer.value = "0" + answer.value;
  }

  attempt.value = "0";
}

function setMessage(message){
  document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
  if (input.length != 4){
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
  return true;
}

function getResults(input){
  let output = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';

  for (var i=0; i<input.length; i++){
    if (input.charAt(i) == answer.value.charAt(i)){
      output = output + '<span class="glyphicon glyphicon-ok"></span>';
    }
    else if (answer.value.indexOf(input.charAt(i)) > -1) {
      output = output + '<span class="glyphicon glyphicon-transfer"></span>';
    }
    else {
      output = output + '<span class="glyphicon glyphicon-remove"></span>'
    }
  }
  output = output + '</div></div>';
  document.getElementById('results').innerHTML += output;

  if (input == answer.value){
    return true;
  }
  return false;
}
