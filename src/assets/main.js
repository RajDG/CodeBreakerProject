let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    //add functionality to guess function here
    if (answer == '' || attempt == '') {
      setHiddenFields();
    }
}

//implement new functions here
function setHiddenFields() {
  answer = Math.random();
  answer = Math.floor(answer * 10000).toString();

  while(answer.length < 4) {
    answer = "0" + answer;
  }

  attempt = "0";
}
