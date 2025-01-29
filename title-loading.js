"use strict";
const title = document.getElementById("title");
title.textContent = "Thank you for coming here😊";
// title.textContent = "నేను జావాస్క్రిప్ట్ నేర్చుకుంటున్నాను";
// title.textContent = "नेनु जावास्क्रिप्ट नेचुकुंटुन्नानु";
// document.title = "I am learning ";

//writte later
const appTitles = [
  "nenu javascript nerchukuntunnanu".toUpperCase(),
  "నేను జావాస్క్రిప్ట్ నేర్చుకుంటున్నాను",
  "नेनु जावास्क्रिप्ट नेचुकुंटुन्नानु",
];
let count = 0;
const intervalId = setInterval(() => {
  title.textContent = appTitles[count];
  count++;
  if (count > appTitles.length) {
    clearInterval(intervalId);
    window.location.href = "home.html";
  }
}, 2000);
