const env = require('dotenv').config({ quiet: true });

const prompt = require('prompt-sync')();

const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc

let baseURL = "https://thesimpsonsapi.com/api"

console.log("Welcome To The Simpson Generator!")
console.log("Please Type In Your Choice")
let choice = prompt("Characters, Episodes, or Locations? ").toLowerCase()

let requestURL = baseURL + "/" + choice

let choiceId = prompt("Enter a Number: ")
let theRequestURL = requestURL + "/" + choiceId

console.log("Generating...")



async function simpsonGenerator(url){
// the actual calling

    let response = await fetch(url)
    let actualData = await response.json()

    if(choice === "Characters" || choice === "characters"){
        let randPhrase = Math.floor(Math.random() * actualData.phrases.length)
        console.log(actualData.phrases[randPhrase])
    }
    

    console.log(actualData.name)
    return actualData
}

simpsonGenerator(theRequestURL)

