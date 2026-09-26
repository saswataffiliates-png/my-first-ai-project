const loadButton = document.querySelector("#loadButton");

const message = document.querySelector("#message");

const productList = document.querySelector("#productList");


loadButton.addEventListener("click", getProducts);


async function getProducts() {

    message.textContent = "Loading products...";

    productList.innerHTML = "";


    try {

        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );


        if (!response.ok) {

            throw new Error("Could not get the products");

        }


        const data = await response.json();


        message.textContent =
            "Products from API";


        for (const product of data) {

            const productElement =
                document.createElement("p");


            productElement.textContent =
                product.name;


            productList.appendChild(
                productElement
            );

        }


    } catch (error) {

        message.textContent =
            "Something went wrong.";

        console.error(error);

    }

}
