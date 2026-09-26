const loadButton = document.querySelector("#loadButton");

const message = document.querySelector("#message");


loadButton.addEventListener("click", getProduct);


async function getProduct() {

    message.textContent = "Loading...";


    try {

        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );


        if (!response.ok) {

            throw new Error("Could not get the data");

        }


        const data = await response.json();


        message.textContent =
            "Product: " + data[0].name;


    } catch (error) {

        message.textContent =
            "Something went wrong.";

        console.error(error);

    }

}
