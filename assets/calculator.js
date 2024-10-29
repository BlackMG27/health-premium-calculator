//create storage variables for IDs
let healthForm = grabID("healthForm");
let healthResults = grabID("healthResults");
let biWeekTotal = grabID("biWeekTotal");
let healthTotal = grabID("healthTotal");
let takeHome = grabID("takeHome");

//create function result variables
let biWeeklyPay;
let raise;
let newHealthPlan;
let finalPay;
let numFormat;

//functions to grab values and IDs
function grabFormValues(value) {
  return document.getElementById(value).value;
}

//grab ids
function grabID(id) {
  return document.getElementById(id);
}

//formats the numbers into dollars
function intoDollars(wage) {
  const dollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return dollar.format(wage);
}

//create an addEventListener function on submit
document.getElementById("healthForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let initWage = Number(grabFormValues("initWage"));
  let biWeekHours = Number(grabFormValues("biWeekHours"));
  let healthPlan = Number(grabFormValues("healthPlan"));

  biWeekPay(initWage, biWeekHours);
  healthCarePrice(healthPlan);
  takeHomePay(biWeeklyPay, newHealthPlan);

  healthResults.classList.remove("health_results_inactive");
  healthResults.classList.add("health_results_active");

  healthForm.reset();
});
//grab values from Kate's chart
//create select value options
//work the math
//multiply new rate by bi-weekly hours
function biWeekPay(wage, hours) {
  biWeeklyPay = wage * hours;
  formatNumber(intoDollars(biWeeklyPay));
  biWeekTotal.appendChild(numFormat);
}
//grab the health plan value
function healthCarePrice(health) {
  //multiply it by 10% and add it to health plan
  newHealthPlan = health / 2 + health * 0.1;
  formatNumber(intoDollars(newHealthPlan));
  healthTotal.appendChild(numFormat);
}

//subtract the new health plan from the new wage
function takeHomePay(pay, health) {
  finalPay = pay - health;
  formatNumber(intoDollars(finalPay));
  takeHome.appendChild(numFormat);
}

//formats the answers
function formatNumber(wageNum) {
  numFormat = document.createElement("span");
  numFormat.classList.add("results_number");
  numFormat.innerHTML = wageNum;
  return numFormat;
}

//adds numFormat to the answer titles
