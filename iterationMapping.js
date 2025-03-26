// Get the maximum loop limit from the user  
const maxLimit = parseInt(prompt("Enter loop limit: "));  

console.log("Result:");  

// Nested loops to calculate and display sum 
for (let i = 0; i <= maxLimit; i++) {  
  for (let j = 0; j <= maxLimit; j++) {  
    let addedValue = i + j; // Add the current values of the counters  
    console.log(`[${i}][${j}] Added value is ${addedValue}`);  
  }  
}  