// eslint-disable
import "bootstrap";
import "./style.css";

window.onload = function() {
  const suit = ["heart", "club", "spade", "diamond"];
  const values = [
    "A",
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
    "K"
  ];
  //función para recorrer el indice del array
  function generateNewCard() {
    const randomSuit = suit[Math.floor(Math.random() * suit.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    const card = document.querySelector(".card");

    //asignar el simbolo a cada palo
    let symbol;
    switch (randomSuit) {
      case "heart":
        symbol = "♥";
        break;
      case "club":
        symbol = "♣";
        break;
      case "spade":
        symbol = "♠";
        break;
      case "diamond":
        symbol = "♦";
        break;
    }

    card.innerHTML = `${randomValue}${symbol}`;
    card.className = `card ${randomSuit}`;
  }

  document
    .getElementById("rollButton")
    .addEventListener("click", generateNewCard);

  generateNewCard();
};
