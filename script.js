const nameInput =
    document.querySelector("#nameInput");

const messageInput =
    document.querySelector("#messageInput");

const sendButton =
    document.querySelector("#sendButton");

const message =
    document.querySelector("#message");


sendButton.addEventListener(
    "click",
    sendData
);


async function sendData() {

    const name =
        nameInput.value.trim();

    const userMessage =
        messageInput.value.trim();


    if (name === "" || userMessage === "") {

        message.textContent =
            "Please enter both fields.";

        return;
    }


    const dataToSend = {

        name: name,

        message: userMessage

    };


    message.textContent =
        "Sending...";


    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify(dataToSend)
            }
        );


        if (!response.ok) {

            throw new Error(
                "Could not send data"
            );

        }


        const result =
            await response.json();


        console.log(result);


        message.textContent =
            "Data sent successfully!";

    }

    catch (error) {

        message.textContent =
            "Something went wrong.";

        console.error(error);

    }

}
