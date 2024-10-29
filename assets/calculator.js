
//create storage variables for IDs

//create function result variables 
let biWeeklyPay;
let raise;
let newHealthPlan;
let finalPay;

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
document.getElementById('healthForm').addEventListener('submit', function(e){
  e.preventDefault()
  let initWage = Number(grabFormValues('initWage'))
  let biWeekHours = Number(grabFormValues('biWeekHours'))
  let healthPlan = Number(grabFormValues('healthPlan'))

  biWeekPay(initWage, biWeekHours)
  healthCarePrice(healthPlan)
  takeHomePay(biWeeklyPay, newHealthPlan)

})
//grab values from Kate's chart 
//create select value options 
//work the math 
  //multiply new rate by bi-weekly hours 
  function biWeekPay(wage, hours){
    biWeeklyPay =  wage * hours
    console.log(intoDollars(biWeeklyPay))
  }
  //grab the health plan value 
  function healthCarePrice(health){
    //multiply it by 10% and add it to health plan
    newHealthPlan = health + (health * .10)
    console.log(intoDollars(newHealthPlan))
  }
   
  //subtract the new health plan from the new wage 
  function takeHomePay(pay, health){
    finalPay = pay - health 
    console.log(intoDollars(finalPay))
  }
  //display the answer 