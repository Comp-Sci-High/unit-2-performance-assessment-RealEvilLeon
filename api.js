const env = require('dotenv').config({ quiet: true });

const prompt = require('prompt-sync')();

const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc

let requestURL = "https://thesimpsonsapi.com/api"

console.log("Welcome To The Simpson Generator!")
console.log("Please Type In Your Choice")
let choice = 

async function SimpsonGenerator(promptData){
// the actual calling
    let response = await fetch(requestURL)
    let actualData = await response.json()
    console.log(actualData)
    return actualData
}



