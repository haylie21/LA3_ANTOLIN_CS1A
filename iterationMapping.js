// Get the maximum loop limit from the user
const prompt = require("prompt-sync")();  
const maxLimit = parseInt(prompt("Enter loop limit: "),10);  

console.log("Result:");  

// Loop through all pairs (i, j) and print their sum
for (let i = 0; i <= maxLimit; i++) {  
  for (let j = 0; j <= maxLimit; j++) {  
    let addedValue = i + j; // Add the current values of the counters  
    console.log(`[${i}][${j}] Added value is ${addedValue}`);  
  }  
}  