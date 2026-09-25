function showFruits() {

    let fruits = [
        "Apple",
        "Mango",
        "Banana",
        "Orange"
    ];

    document.querySelector("#message").textContent =
        fruits.join(" | ");

}
