const connectButton =
    document.querySelector("#connectButton");

const message =
    document.querySelector("#message");


connectButton.addEventListener(
    "click",
    talkToBackend
);


async function talkToBackend() {

    message.textContent =
        "Talking to backend...";


    try {

        const response =
            await fetch(
                "http://localhost:3000"
            );


        const data =
            await response.json();


        message.textContent =
            data.message;


    }

    catch (error) {

        message.textContent =
            "Could not connect to backend.";

        console.error(error);

    }

}
