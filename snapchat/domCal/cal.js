let firstValue = "";   // stores the first number
let operator = "";     // stores the operator (+)
let secondValue = "";  // stores the second number

function Handleclick(el){
 
 const value = el.innerText;
  const input = document.querySelector('.in');
  if (operator === "") {
    firstValue += value;
    input.value = firstValue;
  } else {
    secondValue += value;
    input.value = secondValue;
  }

}
function plus(el){
 operator = "+"; 
  document.querySelector('.in').value = "";

}

function minus(el){
 operator = "-";  
  document.querySelector('.in').value = "";

}
function mul(el){
 operator = "×";  
  document.querySelector('.in').value = "";

}
function div(el){
 operator = "÷";  
  document.querySelector('.in').value = "";

}

function equal() {
  let result = 0;

  if (operator === "+") {
    result = Number(firstValue) + Number(secondValue);
  }
 else if (operator === "-") {
    result = Number(firstValue) - Number(secondValue);
  }
 else if (operator === "×") {
    result = Number(firstValue) * Number(secondValue);
  }
  else if (operator === "÷") {
    result = Number(firstValue) / Number(secondValue);
  }


  document.querySelector('.in').value = result;

  // Reset values so next calculation works
  firstValue = result.toString();
  secondValue = "";
  operator = "";
}

function clearInput() {
  firstValue = "";
  secondValue = "";
  operator = "";
  document.querySelector('.in').value = "";
}