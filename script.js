

//////// start pin generator programme///////
const generateBtn = document.getElementById('generate-pin-btn');
const generatedPin = document.getElementById('pin-number');

generateBtn.addEventListener('click', function () {
  generatedPin.value = randomRange(1000, 9999);
  submitBtn.disabled = false;
  resetStage();
});

function randomRange(oldNumber, newNumber) {
  return Math.floor(Math.random() * (newNumber - oldNumber + 1)) + oldNumber;
}
//////// end pin generator programme///////




// keypad number selection /////
function selectedKeyNumber(selectedBtn) {
  if (selectedBtn.classList.contains('button')) {
    
    if (selectedBtn.dataset.type == 'clear') {
      userInputData.value = '';
    }
    
    else if (selectedBtn.dataset.type == 'backSpace') {
      let inputData = userInputData.value;
      userInputData.value = inputData.slice(0, inputData.length - 1);
    }
// keypad number selection end /////
    



// pin verify start//////
  else {
      const newPin = selectedBtn.innerHTML;
      userInputData.value += newPin;
    }
  }

  if (
    selectedBtn.classList.contains('submit-btn') &&
    generatedPin.value.length > 0
  ) {
    varifyUserInput();
  }
}

function varifyUserInput() {
  if (userInputData.value == generatedPin.value) {
    successNotify.style.display = 'block';
  }
// pin verify end//////
 




// display massages//////
  else {
    wrongNotify.style.display = 'block';
    totalTry--;
    tryLeft.innerText = totalTry;

    if (totalTry == 0) {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = '#3d4153';
    }
  }
}
// end display massages//////






// optional 
const wrongNotify = document.getElementById('notify-wrong');
const successNotify = document.getElementById('notity-success');
const numberKeyPad = document.querySelector('.numbers');
let userInputData = document.getElementById('user-data');
const submitBtn = document.getElementById('submit-btn');
let tryLeft = document.getElementById('numOfTry');
let totalTry = 3;


function notificationhidden() {
  wrongNotify.style.display = 'none';
  successNotify.style.display = 'none';
}
notificationhidden();

numberKeyPad.addEventListener('click', function (e) {
  notificationhidden();
  let selectedKey = e.target;
  selectedKeyNumber(selectedKey);
});

function resetStage() {
  totalTry = 3;
  tryLeft.innerText = totalTry;
  userInputData.value = '';
  notificationhidden();
}
