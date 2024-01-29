let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let inputBoxValue = "";

// create a array of buttons
let arr = Array.from(buttons);

// for each funtion
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      inputBoxValue = eval(inputBoxValue);
      input.value = inputBoxValue;
    } else if (e.target.innerHTML == "AC") {
      inputBoxValue = "";
      input.value = inputBoxValue;
    } else if (e.target.innerHTML == "DEL") {
      inputBoxValue = inputBoxValue.substring(0, inputBoxValue.length - 1);
      input.value = inputBoxValue;
    } else {
      inputBoxValue += e.target.innerHTML;
      input.value = inputBoxValue;
    }
  });
});
