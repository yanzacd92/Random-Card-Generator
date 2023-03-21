/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.changeCard = function changeCard() {
  const icons = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let randomIcon = icons[Math.floor(Math.random() * icons.length)];
  let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  console.log("ICON " + randomIcon);
  console.log("NUMBER " + randomNumbers);

  document.querySelector(".iconTop").innerHTML = randomIcon;
  document.querySelector(".number").innerHTML = randomNumbers;
  document.querySelector(".iconBottom").innerHTML = randomIcon;

  if (randomIcon == "♥" || randomIcon == "♦") {
    document.querySelector(".iconTop").style.color = "red";
    document.querySelector(".iconBottom").style.color = "red";
  } else {
    document.querySelector(".iconTop").style.color = "black";
    document.querySelector(".iconBottom").style.color = "black";
  }
};
