window.onload = function () {
    let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const createCardLayout = (cards) => {
      if (document.querySelector("#cardContainer").children.length > 0) {
        document.querySelector("#cardContainer").innerHTML = "";
      }
      cards.forEach((card, i) => {
        const divElement = document.createElement("div");
        divElement.textContent = card;
        divElement.className = "div";
        divElement.className += " div-" + card;
        document.querySelector("#cardContainer").appendChild(divElement);
      });
    };
    createCardLayout(cards);
    document
      .querySelector("#shuffleBtnId")
      .addEventListener("click", () => {
        let cardCount = 9;
        for (let i = cardCount - 1; i > 0; i--) {
          index = Math.floor(Math.random() * cardCount);
          temp = cards[cardCount - 1];
          cards[cardCount - 1] = cards[index];
          cards[index] = temp;
        }
        createCardLayout(cards);
      });

    document.querySelector("#sortId").addEventListener("click", () => {
      createCardLayout([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  };