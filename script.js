// const quizData = [
//     {
//       question: "1) What does HTML stand for?",
//       options: ["Hyper text markup language", "hyper texting multiple language", "hyperlines text markup language", "non of them"],
//       correct: 2,
//     },
//     {
//       question: "2) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },
//     {
//       question: "3) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "4) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "5) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "6) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "7) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "8) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "9) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "10) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "11) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "11) What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "12)What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },{
//       question: "13)What is 5 + 3?",
//       options: ["5", "8", "12", "15"],
//       correct: 2,
//     },
//     {
//       question: "14)What is the largest planet in the solar system?",
//       options: ["Earth", "Jupiter", "Mars", "Saturn"],
//       correct: 1,
//     },
//     {
//       question: "15)What is the largest planet in the solar system?",
//       options: ["Earth", "Jupiter", "Mars", "Saturn"],
//       correct: 1,
//     },
//   ];

//   let currentQuestion = 0;
//   let score = 0;

//   const questionEl = document.getElementById("question");
//   const optionsEl = document.getElementById("options");
//   const submitBtn = document.getElementById("submit-btn");
//   const resultEl = document.getElementById("result");
//   const scoreEl = document.getElementById("score");
//   const restartBtn = document.getElementById("restart-btn");

//   function loadQuestion() {
//     const currentQuiz = quizData[currentQuestion];
//     questionEl.textContent = currentQuiz.question;
//     optionsEl.innerHTML = "";
//     currentQuiz.options.forEach((option, index) => {
//       const li = document.createElement("li");
//       li.innerHTML = `<input type="radio" name="option" id="option${index}" value="${index}">
//                       <label for="option${index}">${option}</label>`;
//       optionsEl.appendChild(li);
//     });
//   }

//   function getSelected() {
//     const options = document.querySelectorAll('input[name="option"]');
//     let selectedOption = null;
//     options.forEach((option) => {
//       if (option.checked) selectedOption = parseInt(option.value);
//     });
//     return selectedOption;
//   }

//   function showResult() {
//     resultEl.classList.remove("hidden");
//     scoreEl.textContent = `${score} / ${quizData.length}`;
//   }

//   submitBtn.addEventListener("click", () => {
//     const selectedOption = getSelected();
//     if (selectedOption === null) {
//       alert("Please select an option!");
//       return;
//     }
//     if (selectedOption === quizData[currentQuestion].correct) {
//       score++;
//     }
//     currentQuestion++;
//     if (currentQuestion < quizData.length) {
//       loadQuestion();
//     } else {
//       document.getElementById("quiz").classList.add("hidden");
//       showResult();
//     }
//   });

//   restartBtn.addEventListener("click", () => {
//     currentQuestion = 0;
//     score = 0;
//     resultEl.classList.add("hidden");
//     document.getElementById("quiz").classList.remove("hidden");
//     loadQuestion();
//   });

//   // Load the first question
//   loadQuestion();

const quizData = [
  {
    section: "HTML",
    questions: [
      { question: "1- What does HTML stand for?", 
      options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Text Markdown Language"], 
      correct: 1 },
      { question: "2- Which tag is used to create a hyperlink?", 
      options: ["link", "src", "href", "hlink"], 
      correct: 0 },
      { question: "3- What is the smallest heading tag in HTML?", 
      options: ["h6", "h1", "h3", "h5"], 
      correct: 0 },
      { question: "4- Which attribute specifies an alternate text for an image?", 
      options: ["src", "title", "alt", "text"], 
      correct: 2 },
      { question: "5- What tag is used to define a table?",
      options: ["tr", "td", "table", "tab"], 
      correct: 2 },
    ],
  },
  {
    section: "CSS",
    questions: [
      { question: "1- What does CSS stand for?", 
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], 
      correct: 1 },
      { question: "2- Which property is used to change the background color?", 
      options: ["background", "color", "bgcolor", "background-color"], 
      correct: 3 },
      { question: "3- Which CSS property controls text size?", 
      options: ["text-size", "font-size", "font-weight", "text-style"], 
      correct: 1 },
      { question: "4- Which property is used for adding space inside elements?", 
      options: ["padding", "margin", "border", "spacing"], 
      correct: 0 },
      { question: "5- What does 'z-index' specify?", 
      options: ["Position of elements", "Stack order of elements", "Visibility of elements", "Alignment of elements"], 
      correct: 1 },
    ],
  },
  {
    section: "JavaScript",
    questions: [
      { question: "1- What is the correct way to write a comment in JavaScript?", 
      options: ["-- This is a comment --", "// This is a comment", "/* This is a comment */", "# This is a comment"], 
      correct: 1 },
      { question: "2- Which symbol is used for strict equality?", 
      options: ["==", "===", "!==", "="], 
      correct: 1 },
      { question: "3- How do you declare a variable in JavaScript?", 
      options: ["var", "let", "const", "All of the above"], 
      correct: 3 },
      { question: "4- Which method converts JSON data into a JavaScript object?", 
      options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"], 
      correct: 0 },
      { question: "5- Which operator is used to concatenate strings?", 
      options: ["+", ".", "&", "#"], 
      correct: 0 },
    ],
  },
];


let currentSection = 0;
let currentQuestion = 0;
let score = 0;

const sectionTitleEl = document.getElementById("section-title");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  const section = quizData[currentSection];
  const questionData = section.questions[currentQuestion];
  sectionTitleEl.textContent = `${section.section} Section`;
  questionEl.textContent = questionData.question;
  optionsEl.innerHTML = "";
  questionData.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="radio" name="option" id="option${index}" value="${index}">
      <label for="option${index}" class="option-label">${option}</label>`;
    optionsEl.appendChild(li);
  });
}

function getSelected() {
  const options = document.querySelectorAll('input[name="option"]');
  let selectedOption = null;
  options.forEach((option) => {
    if (option.checked) selectedOption = parseInt(option.value);
  });
  return selectedOption;
}

function highlightAnswers(correct, selected) {
  const labels = document.querySelectorAll(".option-label");
  labels.forEach((label, index) => {
    if (index === correct) {
      label.style.color = "green"; // Highlight the correct answer in green
    }
    if (index === selected && index !== correct) {
      label.style.color = "red"; // Highlight the wrong answer in red
    }
  });
}

submitBtn.addEventListener("click", () => {
  const selectedOption = getSelected();
  if (selectedOption === null) {
    alert("Please select an option!");
    return;
  }

  const correctOption = quizData[currentSection].questions[currentQuestion].correct;

  highlightAnswers(correctOption, selectedOption);

  if (selectedOption === correctOption) {
    score++;
  }

  submitBtn.disabled = true; // Disable the button until the next question
  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion >= quizData[currentSection].questions.length) {
      currentSection++;
      currentQuestion = 0;
    }

    if (currentSection >= quizData.length) {
      document.getElementById("quiz").classList.add("hidden");
      showResult();
    } else {
      submitBtn.disabled = false; // Re-enable the button for the next question
      loadQuestion();
    }
  }, 2000); // Wait for 2 seconds before moving to the next question
});

function showResult() {
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${quizData.reduce((acc, section) => acc + section.questions.length, 0)}`;
}

restartBtn.addEventListener("click", () => {
  currentSection = 0;
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
});

// Load the first question
loadQuestion();
