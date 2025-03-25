// Prompt the user to input their score  
const prompt = require("prompt-sync")();  
const score = parseInt(prompt("Enter your score: "));  

// Assign equivalent grade and final remarks using Conditional Ternary and If-Else If statements  
const equivalentGrade =   
    score >= 97 ? "1.00 Excellent" :  
    score >= 94 ? "1.25 Excellent" :  
    score >= 91 ? "1.50 Above Average" :  
    score >= 88 ? "1.75 Above Average" :  
    score >= 85 ? "2.00 Average" :  
    score >= 82 ? "2.25 Average" :  
    score >= 79 ? "2.50 Below Average" :  
    score >= 76 ? "2.75 Below Average" :  
    score >= 75 ? "3.00 Poor" :  
    score >= 0 ? "4.00 Poor" :  
    "Invalid Score";  

// Determine final remarks based on score using If-Else If statements  
let finalRemarks;  
if (score >= 90) {  
    finalRemarks = "HIGH PASS, Candidate for Cum Laude";  
} else if (score >= 80) {  
    finalRemarks = "AVERAGE PASS";  
} else if (score >= 75) {  
    finalRemarks = "LOW PASS";  
} else if (score < 75) {  
    finalRemarks = "FAILED, Needs Improvement";  
}  

// Display the results  
console.log(`Result:\nYour equivalent Grade is "${equivalentGrade}"\nFinal Remarks: ${finalRemarks}`);  