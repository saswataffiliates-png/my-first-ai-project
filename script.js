const nameInput = document.querySelector("#nameInput");

const ageInput = document.querySelector("#ageInput");

const submitButton = document.querySelector("#submitButton");

const message = document.querySelector("#message");

submitButton.addEventListener("click", showPerson);

function showPerson() {

    const name = nameInput.value;

    const age = ageInput.value;

    if (name === "" || age === "") {

        message.textContent =
            "Please enter both your name and age.";

    } else {

        const person = {
            name: name,
            age: age
        };

        message.textContent =
            "Hello " + person.name +
            "! You are " + person.age +
            " years old.";

    }

}
