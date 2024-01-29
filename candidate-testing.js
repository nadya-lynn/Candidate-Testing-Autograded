const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question ="Who was the first American woman in space? ";
let correctAnswer= "Sally Ride";
let candidateAnswer= "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? " , 
"True or false: 5 kilometer == 5000 meters? " , 
"(5 + 3)/2 * 10 = ? " , 
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " , 
"What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName;
  candidateName = input.question(`Please enter your name: `);
  console.log(`Hello, ${candidateName}!`);
}
 
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    console.log(`\n ${questions[i]}`);
   let candidateAnswer = input.question(`Your Answer: `);
   console.log(`Correct Answer: ${correctAnswers[i]}`);
   candidateAnswers.push(candidateAnswer); 
  } 
}
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let countOfCorrectAnswers = 0;
  let countOfWrongAnswers = 0;  
  
  for ( i = 0; i < candidateAnswers.length; i++) {
    let correctAnswer = correctAnswers[i].toLowerCase();
      if (candidateAnswers[i].toLowerCase() === correctAnswer) {
        countOfCorrectAnswers +=1;
      } else {
        countOfWrongAnswers+=1;
      }
    }

   //TODO 3.2 use this variable to calculate the candidates score.
    let grade = countOfCorrectAnswers / questions.length * 100;
    let studentSituation="";
    if (grade >= 80) {
      studentSituation ==="Passed."
      console.log(`\nStatus: Passed!`);  
    } else {
      studentSituation === "Failed."
      console.log(`\nStatus: Failed`);
    }
    console.log(`Student Grade: ${grade}%.  Correct answers : ${countOfCorrectAnswers}, Wrong answers: ${countOfWrongAnswers}`);
  return grade;
}

function runProgram() {
  
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  askQuestion();
  //finalGrade();
  gradeQuiz(candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};