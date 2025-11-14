const env = require('dotenv').config({ quiet: true });

const prompt = require('prompt-sync')();

const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc

let requestURL = "https://api.openai.com/v1/responses"

async function chatgptBot(promptData){

    let options = {
        method: 'POST',
        headers:{
            Authorization:'Bearer ' +apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(promptData)
    }

    // the actual calling
    let response = await fetch(requestURL,options)
    let actualData = await response.json()
    console.log(actualData)
    return actualData
}

chatgptBot({
    model:"gpt-4.1",
    input:"Tell me a three sentence bedtime story about a unicorn."
})
