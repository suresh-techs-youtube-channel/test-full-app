// Array of topics
const topics = [
  "Why should I learn JavaScript?",
  "What is JavaScript? What can we do with it?",
  "How to make a web application dynamic? Front-end, Back-end, Full-stack",
  "JavaScript Engine",
  "Interview Questions Chapter 1 to 4",
  "Install Visual Studio Code",
  "First JavaScript Program",
  "Understand console.log()",
  "Specifications / Documentation",
  "alert()",
  "Overview of Data Types",
  "Program on strings Strings(Single, double, backticks)",
  "Variables, Keywords, Identifiers",
  "let, var, const",
  "Statements, expressions and literals",
  "Why is JavaScript single threaded? Synchronous and Asynchronous programming",
  "comments",
  "Overview of 8 Data types",
  "Definition of JavaScript",
  "Interview questions from chapter 7 to chapter 18",
  "prompt",
  "Type conversions",
  "Operators",
  "Comparisons",
  "if (conditional statement)",
  "Suresh techs hospital",
  "Free bus pass",
  "confirm",
  "logical operators",
  "Interview questions from 20 to 29 chapters",
  "Agile-Scrum-Sprint-Daily call",
  "Overview of functions, execution contexts",
  "Scopes",
  "Hoisting",
  "Recap of chapters 32, 33, 34 + Window",
];
const applications = [
  { name: "Counter App", location: "counterapp.html" },
  { name: "Suresh Bio", location: "sureshbiodata.html" },
  { name: "Lottery Game", location: "lotterygame.html" },
  { name: "Online shopping app", location: "online-shopping.html" },
];

// Select the ordered list element
const topicsList = document.getElementById("chapter-container");
const applicationsList = document.getElementById("applications-container");

// Dynamically create list items and append to the list
topics.forEach((topic) => {
  const listItem = document.createElement("li"); // Create a <li> element
  listItem.textContent = topic; // Set the text content of the <li>
  topicsList.appendChild(listItem); // Append the <li> to the <ol>
});

applications.forEach((topic) => {
  const listItem = document.createElement("a"); // Create a <li> element
  listItem.href = topic.location;
  listItem.target = "target";
  listItem.classList.add("app-row");
  listItem.textContent = topic.name; // Set the text content of the <li>
  applicationsList.appendChild(listItem); // Append the <li> to the <ol>
});
