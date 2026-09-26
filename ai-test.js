const OpenAI = require("openai");

const client = new OpenAI();

async function main() {

    const response = await client.responses.create({
        model: "gpt-5.6-luna",
        input: "Say hello to me in one short sentence."
    });

    console.log(response.output_text);
}

main();
