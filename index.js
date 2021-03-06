var readlineSync = require("readline-sync");
var score = 0;

//Taking username as input

var userName = readlineSync.question("What's your name?\n");
console.log("Hi "+userName+"! Welcome to the 'Bitcoin Quiz' game. There will be five questions and you score a point for each correct answer and lose a point for each incorrect answer. To answer a question 'Type the correct option, for example a,b or c and press Enter'. Try to beat the high score and have fun!");
console.log("------------------");
if(readlineSync.keyINYN("have you understood the instruction?"))
{
    console.log("Good! Now let's start playing.");

}
else
{
    console.log("Read the 'About the game' section again.");
}
console.log("------------------");
//play function

function play(question,correctAnser)
{
    var userAnswer = readlineSync.question("Enter the correct option: ");

    if(userAnswer == questionList[i].correctAnswer)
    {
        console.log("Congrats!\nYour answer is correct. ");
        score = score + 1;

    }
    else
    {
        console.log("Too bad!\nYour answer is incorrect");
        score = score + 0;
    }
    console.log("Your current score is :",score);
    console.log("------------------");
}
//question list

var questionList=[
    {
        question: "1. What is bitcoin? ",
        a: "[a]: Cryptocurrency",
        b: "[b]: an ancient coin of 18th century",
        c: "[c]: a coin with bite marks",
        correctAnswer: "a",

    },
    {
        question: "2. Who is the founder of bitcoin? ",
        a: "[a]: Elon Musk",
        b: "[b]: John Bitcoin",
        c: "[c]: Satoshi Nakamoto",
        correctAnswer: "c",
    },
    {
        question: "3. In which year was the first bitcoin block mined? ",
        a: "[a]: 2009",
        b: "[b]: 2021",
        c: "[c]: 2013",
        correctAnswer: "a",

    },
    {
        question: "4. What is the underlying system used to build bitcoin?",
        a: "[a]: Shilling",
        b: "[b]: Blockchain",
        c: "[c]: Cryptoscript",
        correctAnswer: "b",

    },
    {
        question: "5. What is the largest crypto exchange in the world in terms of volume? ",
        a: "[a]: Houbi Global",
        b: "[b]: Coinbase",
        c: "[c]: Binance",
        correctAnswer: "c",
    }
]
//calling the function

for(i=0;i<questionList.length;i++)
{
    var currentQuestion = questionList[i].question;
    var optionOne = questionList[i].a;
    var optionTwo = questionList[i].b;
    var optionThree = questionList[i].c;
    console.log(currentQuestion);
    console.log(optionOne);
    console.log(optionTwo);
    console.log(optionThree);
    play(currentQuestion.question,currentQuestion.correctAnswer);
}
//final score

console.log("Your final score is: ",score);
console.log("------------------");
//highscore

var highScore={
    name: "Amartya Raj Basu",
    score: 4,
}

if(score>=highScore.score)
{
    highScore.score = score;
    console.log("The highest score, "+highScore.score+", is made by you.");
    console.log("Congrats!You made a new highscore. Send me a screenshot of your name and highscore at 'abhirup_skr' on Instagram or twitter(same username) so that I can update the database.");
}
else
{
    console.log("Too bad! You could not beat the highest score.");
    console.log("The highest score is: ",highScore);
}

