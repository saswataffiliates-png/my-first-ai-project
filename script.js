const fruitButton = document.querySelector("#fruitButton");

const message = document.querySelector("#message");

fruitButton.addEventListener("click", showFruits);

function showFruits() {

    const fruits = [
        "Apple",
        "Mango",
        "Banana",
        "Orange"
    ];

    message.textContent = fruits.join(" | ");

}
