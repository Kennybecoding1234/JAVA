// Define variables
let noun = "cat";
let verb = "jumps";
let adjective = "furry";
let number = 5;
let calculatedNumber = number * 2;
let isExciting = true;

// Prompt the user for a value
let userNoun = prompt("Enter a noun:");

// Create the story
let story = `Once upon a time, there was a ${adjective} ${noun} that loved to ${verb} over ${calculatedNumber} tall trees. It was ${isExciting ? "so exciting" : "not that exciting"}! Everyone said, "${userNoun} will be next!"`;

// Output the story to the console
console.log(story);
