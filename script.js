async function getProducts() {

    const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    if (!response.ok) {
        throw new Error("Could not get the data");
    }

    const data = await response.json();

    console.log(data);
}

getProducts();
