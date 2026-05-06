"use strict";

const weight = parseInt(prompt("Please enter your weight (kg)"));
const height = parseFloat(prompt("Please enter your height (m)"));
const gender = prompt("What is your gender? Enter M or F");
let bmiCategory;

// Bmi formula
let bmi = weight / height ** 2;

/*
Underweight = < 18.5
Healthy weight = >= 18.5 && < 24.9
Overweight = >= 25.0 && <= 29.9
Obesity =  30.0 and above 
*/

if (bmi < 18.5) {
  bmiCategory = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  bmiCategory = "Healthy";
} else if (bmi >= 25.0 && bmi <= 29.9) {
  bmiCategory = "Overweight";
} else {
  bmiCategory = "Obesity";
}

let message =
  gender === "M"
    ? `Hello bro, your Bmi is: ${bmi} which is ${bmiCategory}`
    : `Hello broette, your Bmi is: ${bmi} which is ${bmiCategory}`;
console.log(message);
