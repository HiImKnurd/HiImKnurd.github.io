function writeCopy() {
  let d = new Date();
  let el = document.querySelector("#copy");
  el.innerHTML = 'Copyright © ' + d.getFullYear();
}

document.addEventListener('DOMContentLoaded', writeCopy);


// fields
const bill = document.querySelector("#bill");
const numPeople = document.querySelector("#numPeople");
const tip = document.querySelector("#tip");

// elements
const amt = document.querySelector("#amt");
const ttp = document.querySelector("#ttp");
const app = document.querySelector("#app")

// listeners when fields change
const inputColl = document.querySelectorAll("#left"); //todo
for (let item of inputColl) { // loop each item
  item.addEventListener("change", doCalculate);
}

// 
function doCalculate() {
  let totalTips = (1.0 * bill.value) * (1.0 * tip.value) * 0.01;
  let totalAmount = 1.0 * bill.value
  let amountPerPerson = (1.0 * bill.value) / numPeople.value
  
  amt.innerHTML = totalAmount.toFixed(2);
  ttp.innerHTML = totalTips.toFixed(2);
  app.innerHTML = amountPerPerson.toFixed(2);
}