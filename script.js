const button = document.querySelector("#sendButton");

const nameInput = document.querySelector("#name");

const messageInput = document.querySelector("#message");

const result = document.querySelector("#result");


button.addEventListener(
    "click",
    async () => {

        const name = nameInput.value;

        const message = messageInput.value;


        result.textContent = "Sending...";


        try {

            const response = await fetch(
                "/api/message",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        message: message
                    })
                }
            );


            const data = await response.json();


            result.textContent =
                data.reply;

        } catch (error) {

            result.textContent =
                "Something went wrong.";

            console.error(error);

        }

    }
);
