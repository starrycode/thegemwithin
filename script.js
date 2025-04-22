// const questions = [
//     {
//       question: "How do you recharge?",
//       options: [
//         { text: "Partying with friends", type: "E" },
//         { text: "Quiet time alone", type: "I" }
//       ]
//     },
//     {
//       question: "Which sounds more like you?",
//       options: [
//         { text: "Realistic, practical", type: "S" },
//         { text: "Imaginative, abstract", type: "N" }
//       ]
//     },
//     {
//       question: "How do you decide?",
//       options: [
//         { text: "Logic first", type: "T" },
//         { text: "Feelings matter", type: "F" }
//       ]
//     },
//     {
//       question: "What's your lifestyle?",
//       options: [
//         { text: "Organized & planned", type: "J" },
//         { text: "Flexible & spontaneous", type: "P" }
//       ]
//     }
//   ];
  
//   let current = 0;
//   let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
//   const quizDiv = document.getElementById("quiz");
//   const nextBtn = document.getElementById("next-btn");
//   const resultDiv = document.getElementById("result");
  
//   function showQuestion() {
//     const q = questions[current];
//     quizDiv.innerHTML = `<p>${q.question}</p>` + q.options.map((o, i) =>
//       `<label><input type="radio" name="option" value="${o.type}"> ${o.text}</label><br/>`
//     ).join('');
//   }
  
//   function showResult() {
//     const type = (scores.E >= scores.I ? "E" : "I") +
//                  (scores.S >= scores.N ? "S" : "N") +
//                  (scores.T >= scores.F ? "T" : "F") +
//                  (scores.J >= scores.P ? "J" : "P");
//     resultDiv.classList.remove("hidden");
//     resultDiv.innerHTML = `<h2>Your MBTI type is ${type}!</h2><p>Now meet your inner princess...</p>`;
//     quizDiv.classList.add("hidden");
//     nextBtn.classList.add("hidden");
//   }
  
//   nextBtn.addEventListener("click", () => {
//     const selected = document.querySelector('input[name="option"]:checked');
//     if (!selected) return alert("Choose an option!");
//     scores[selected.value]++;
//     current++;
//     if (current < questions.length) {
//       showQuestion();
//     } else {
//       showResult();
//     }
//   });
  
//   showQuestion();
  // Define the questions and answers with corresponding MBTI dimensions
const questions = [
  {
    question: "Your perfect gemstone is glowing in the dark. What do you do?",
    options: [
      { text: "Hold it in your hand, feeling its warmth and energy.", dimension: "I/E" },
      { text: "Observe its glow from a distance, admiring its beauty.", dimension: "I/E" },
      { text: "Study its structure and how it reflects light.", dimension: "S/N" },
      { text: "Wonder how it was formed and what secrets it holds.", dimension: "S/N" }
    ]
  },
  {
    question: "A gem falls into your lap, but it’s not the one you expected. How do you react?",
    options: [
      { text: "Feel curious, study it closely, and figure out its use.", dimension: "S/N" },
      { text: "Feel disappointed but accept it as a challenge to adapt.", dimension: "J/P" },
      { text: "Feel surprised, and decide to share it with everyone around.", dimension: "E" },
      { text: "Consider its hidden meaning and what it symbolizes for you.", dimension: "I" }
    ]
  },
  {
    question: "The gem begins to hum softly, revealing a message. What is your first instinct?",
    options: [
      { text: "Try to decipher the message logically, making sense of it step by step.", dimension: "T/F" },
      { text: "Reflect on how the message makes you feel and what it means for you personally.", dimension: "F" },
      { text: "Feel energized by the gem and excited to share the discovery.", dimension: "E" },
      { text: "Focus on its deeper meaning, seeking answers to long-held questions.", dimension: "I" }
    ]
  },
  {
    question: "You’re tasked with forging a new gem. How do you approach the process?",
    options: [
      { text: "I follow precise instructions and make sure everything is perfect.", dimension: "J" },
      { text: "I experiment freely, seeing what the process reveals.", dimension: "P" },
      { text: "I focus on the durability and strength of the gem above all.", dimension: "T" },
      { text: "I ensure it’s beautiful and meaningful, blending form with function.", dimension: "F" }
    ]
  },
  {
    question: "The light around your gem changes color unexpectedly. How do you interpret it?",
    options: [
      { text: "I seek to understand the cause behind this and use logic to solve it.", dimension: "T" },
      { text: "I embrace the change, enjoying the beauty in its unpredictability.", dimension: "P" },
      { text: "I ask others about it, wondering if they see the same thing.", dimension: "E" },
      { text: "I meditate on its meaning, feeling its emotional resonance.", dimension: "I" }
    ]
  },
  {
    question: "You come across a gem that’s been lost for centuries. What are you most drawn to?",
    options: [
      { text: "The mystery behind its origin and how it survived the ages.", dimension: "N" },
      { text: "The purity and clarity of its structure.", dimension: "S" },
      { text: "The history and legacy it carries.", dimension: "J" },
      { text: "The untold stories and emotions it might hold within.", dimension: "F" }
    ]
  },
  {
    question: "A storm threatens your collection of rare gems. How do you prepare?",
    options: [
      { text: "I make sure everything is neatly secured, leaving no room for mistakes.", dimension: "J" },
      { text: "I take a moment to appreciate the beauty of the storm before acting.", dimension: "P" },
      { text: "I consider how I can make the situation better for others as well.", dimension: "E" },
      { text: "I focus on protecting the gems I cherish most, ensuring their safety.", dimension: "I" }
    ]
  },
  {
    question: "A new gem appears before you, its color constantly shifting. How do you feel?",
    options: [
      { text: "Excited, wondering what new discovery awaits.", dimension: "E" },
      { text: "Slightly overwhelmed, preferring things to be more predictable.", dimension: "I" },
      { text: "Intrigued, trying to analyze the shifts and understand their significance.", dimension: "N" },
      { text: "Inspired, thinking about how it reflects the changing seasons of life.", dimension: "F" }
    ]
  }
];

// // Store the user's responses
// let userResponses = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

// // Function to display a question and options
// function displayQuestion(questionIndex) {
//   const questionData = questions[questionIndex];
//   let questionHTML = `<h3>${questionData.question}</h3>`;
  
//   questionData.options.forEach((option, index) => {
//     questionHTML += `
//       <div class="option">
//         <input type="radio" name="question${questionIndex}" id="option${questionIndex}_${index}" value="${option.dimension}" onclick="trackAnswer('${option.dimension}')">
//         <label for="option${questionIndex}_${index}">${option.text}</label>
//       </div>
//     `;
//   });

//   document.getElementById('question-container').innerHTML = questionHTML;
// }

// // Function to track answers
// function trackAnswer(dimension) {
//   userResponses[dimension]++;
// }

// // Function to calculate and display results
// function showResults() {
//   let result = "";
//   const sortedResponses = Object.entries(userResponses).sort((a, b) => b[1] - a[1]);

//   sortedResponses.forEach(([dimension, score]) => {
//     result += `<p>${dimension}: ${score}</p>`;
//   });

//   document.getElementById('result-container').innerHTML = result;
// }

// // Start the quiz by showing the first question
// let currentQuestion = 0;
// function nextQuestion() {
//   if (currentQuestion < questions.length) {
//     displayQuestion(currentQuestion);
//     currentQuestion++;
//   } else {
//     showResults();
//   }
// }

// // Add a "Next" button that will call the next question function
// document.getElementById('next-btn').addEventListener('click', nextQuestion);

// // Initial call to start the quiz
// nextQuestion();


// Render the first question
let currentQuestionIndex = 0;
const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
    <h2>${question.question}</h2>
    ${question.options.map((option, index) => `
      <div class="option">
        <input type="radio" id="option${index}" name="question${currentQuestionIndex}" value="${option.type}">
        <label for="option${index}">${option.text}</label>
      </div>
    `).join('')}
  `;

  // Disable the "Next" button initially
  nextButton.disabled = true;

  // Enable the "Next" button when a choice is made
  const radioButtons = questionContainer.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });
}

// Load the first question
renderQuestion();

// Handle the "Next" button click
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
});

// Show the results after all questions
function showResults() {
  questionContainer.innerHTML = "<h2>Results</h2>";
  // Display the result logic here
  // For now, you can display a placeholder message
  questionContainer.innerHTML += "<p>Your results will appear here!</p>";
}
