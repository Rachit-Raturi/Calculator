let result = document.getElementById('result');

let justCalculated = false;

let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
});


function appendToResult(value) {
  if (!justCalculated || value === '*' || value === '/' || value === '-' || value === '+' ) { 
    if (value === '*' || value === '/' || value === '-' || value === '+') {
      result.value += ' ' + value + ' ';
      justCalculated = false;
    } else {
      result.value += value;
    }
  }  else {
    result.value = value;
    justCalculated = false;
  }
}

function clearResult() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);
  justCalculated = true;
}
