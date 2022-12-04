document.addEventListener("DOMContentLoaded", () => {
  // card options
  console.log("loaded");
  const cardArray = [
    {
      name: "banana",
      img: "images/banana.png",
    },
    {
      name: "banana",
      img: "images/banana.png",
    },
    {
      name: "carrot",
      img: "images/carrot.png",
    },
    {
      name: "carrot",
      img: "images/carrot.png",
    },
    {
      name: "cherry",
      img: "images/cherry.png",
    },
    {
      name: "cherry",
      img: "images/cherry.png",
    },
    {
      name: "eggplant",
      img: "images/eggplant.png",
    },
    {
      name: "eggplant",
      img: "images/eggplant.png",
    },
    {
      name: "grape",
      img: "images/grape.png",
    },
    {
      name: "grape",
      img: "images/grape.png",
    },
    {
      name: "orange",
      img: "images/orange.png",
    },
    {
      name: "orange",
      img: "images/orange.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const countTotal = document.querySelector("#deneme");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let count = 0;

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/question.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Yakaladın !!!");
      cards[optionOneId].setAttribute("src", "images/tick.png");
      cards[optionTwoId].setAttribute("src", "images/tick.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/question.png");
      cards[optionTwoId].setAttribute("src", "images/question.png");
      alert("Uuuppsss!!! Tekrar deneyin");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Terikler !!!";
    }
  }

  // flip your card
  function flipcard() {
    // count = count + 1;
    let cardId = this.getAttribute("data-id");
    console.log("cardId", cardId);
    cardsChosen.push(cardArray[cardId].name);
    console.log("cardArray[cardId].name", cardArray[cardId].name);
    if (cardsChosenId.includes(cardId)) {
      alert("Can't choose same photo");
      return;
    } else {
      cardsChosenId.push(cardId);
    }
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 100);
    }
    // countTotal.innerHTML = count;
  }
  createBoard();
});
