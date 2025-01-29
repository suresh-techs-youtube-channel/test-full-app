const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const incrementBy5Btn = document.getElementById("incremntBy5Btn");
const decrementBy5Btn = document.getElementById("decrementBy5Btn");
const resetBtn = document.getElementById("reset");
const resultElement = document.getElementById("result");
console.log(incrementBtn);
let counter = 0;
incrementBtn.addEventListener("click", function (event) {
  console.log(event);
  console.log("clicking");
  counter = counter + 1;
  resultElement.textContent = counter;
});
decrementBtn.addEventListener("click", function () {
  if (counter > 0) {
    counter = counter - 1;
  }
  resultElement.textContent = counter;
});
incrementBy5Btn.addEventListener("click", function () {
  counter = counter + 5;
  resultElement.textContent = counter;
});

decrementBy5Btn.addEventListener("click", function () {
  if (counter > 4) {
    counter = counter - 5;
  }
  resultElement.textContent = counter;
});
resetBtn.addEventListener("mouseleave", function () {
  counter = 0;
  resultElement.textContent = counter;
});
console.log("migata panulu chestunnam");
