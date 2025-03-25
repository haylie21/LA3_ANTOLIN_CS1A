// Prompt the user to input the Max Limit of the loops  
const prompt = require("prompt-sync")();  
const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "));  

console.log("Result:");  

// Double loop to iterate and calculate the added value for each iteration  
for (let i = 0; i <= maxLimit; i++) {  
  for (let j = 0; j <= maxLimit; j++) {  
    let addedValue = i + j; // Add the current values of the counters  
    console.log(`[${i}][${j}] Added value is ${addedValue}`);  
  }  
}  