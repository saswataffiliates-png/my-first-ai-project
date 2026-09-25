let age = 20;

function sayHello() {

    if (age >= 18) {

        document.querySelector("#message").textContent =
            "You are an adult.";

    } else {

        document.querySelector("#message").textContent =
            "You are under 18.";

    }

}
