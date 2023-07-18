

//const {onSchedule} = require("firebase-functions/v2/scheduler");
import { onRequest } from "firebase-functions/v2/https";

import * as logger from "firebase-functions/logger";
const { Configuration, OpenAIApi } = require("openai");
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');


export const newProblem = onRequest(async (request, response) => {

//exports.newProblemV2 = onSchedule("every day 00:06", async (event: any) => {
    logger.info("Hello logs!!!!!", { structuredData: true });


    //work out the prompt
    //number represents the reletive frequency of the language
    const languages : {[key: string]: number} = {
        "bash": 1,
        "c": 1,
        "c++": 1,
        "c#": 1,
        "ada": 0.1,
        "assembly": 0.7,
        "fortran": 0.2,
        "go": 0.5,
        "haskell": 0.1,
        "java": 1,
        "javascript": 3,
        "typescript": 2.2,
        "kotlin": 0.5,
        "lisp": 0.1,
        "lua": 0.3,
        "matlab": 0.1,
        "objective-c": 0.5,
        "pascal": 0.1,
        "perl": 0.1,
        "php": 1,
        "python": 3,
        "r": 0.1,
        "ruby": 0.5,
        "rust": 0.5,
        "scala": 0.5,
        "swift": 0.5,
        "visual basic": 0.2,
        "dart": 0.5,
        "cobol": 0.1,
        "algol": 0.1,
        "Amiga-E": 0.02,
        "Prolog": 0.1,
        "clojure": 0.1,
        "f#": 0.1,
        "julia": 0.1,
        "machine code": 0.1,
        "emojicode": 0.07,
        "brainfuck": 0.5,
        "lolcode": 0.02,
        "rockstar": 0.02,
        "powershell": 0.1,
        "batch": 0.05,
        "Whitespace": 0.07,
        "LOGO": 1,



    }

    const tasks : string[] = [
        "uses IO",
        "uses a loop and a function",
        "does error handling",
        "reads a file",
        "writes to a file",
        "makes a network request",
        "uses a library",
        "uses a data structure",
        "uses a binary tree",
        "draws a christmas tree",
        "solves for pi",
    ]



    //THIS CODE uses weights
    // let random = Math.random()

    // //find the total weight of all the languages
    // let total = 0
    // for (const [_, value] of Object.entries(languages)) {
    //     total += value
    // }

    // let target = random * total

    // //find the language
    // let language = ""
    // let runningTotal = 0
    // for (const [key, value] of Object.entries(languages)) {
    //     runningTotal += value
    //     if (target < runningTotal) {
    //         language = key
    //         break
    //     }
    // }


    //THIS CODE DOES NOT USE WEIGHTS TO FIND THE LANGUAGE
    const language = languages[Math.floor(Math.random() * languages.length)];

    //pick a random task
    const task = tasks[Math.floor(Math.random() * tasks.length)];







    //do the openai stuff
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });


    const openai = new OpenAIApi(configuration);
    const chat_completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `Write an example of code written in ${language} that ${task}.` }],
    });

    logger.info("Output: ", chat_completion.data)

    const generatedCode = chat_completion.data.choices[0].message.content




    //do the firebase stuff
    initializeApp();

    const db = getFirestore();

    const data = {
        problem: {
            code: generatedCode,
            language: language,
        }
    };

    // Add a new document in collection "cities" with ID 'LA'
    const tomorrowISO = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().substring(0, 10);

    await db.collection('dailyChallenges').doc(tomorrowISO).set(data);


    logger.log("Done");


    response.send(`Hello from Firebase! ${generatedCode}`);
});
