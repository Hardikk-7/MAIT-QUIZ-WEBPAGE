const quizData = [
  {
    question: "MAIT is affiliated with which university?",
    options: ["Delhi University", "IP University", "JNU", "IIT Delhi"],
    answer: "IP University"
  },
  {
    question: "MAIT is located in which city?",
    options: ["Noida", "Delhi", "Gurgaon", "Faridabad"],
    answer: "Delhi"
  },
  {
    question: "What does MAIT stand for?",
    options: [
      "Maharaja Agrasen Institute of Technology",
      "Modern Advanced Institute of Technology",
      "Management and IT College",
      "Metro Academy of IT"
    ],
    answer: "Maharaja Agrasen Institute of Technology"
  },
  {
    question: "Which branch focuses on Artificial Intelligence & ML?",
    options: ["AI & ML", "Mechanical", "Civil", "Electrical"],
    answer: "AI & ML"
  },
  {
    question: "Which language is primarily used in web development?",
    options: ["Python", "JavaScript", "C", "Java"],
    answer: "JavaScript"
  },
  {
    question: "Which subject deals with databases?",
    options: ["DBMS", "Physics", "Chemistry", "Maths"],
    answer: "DBMS"
  },
  {
    question: "Which of these is a frontend technology?",
    options: ["HTML", "MySQL", "Python", "Java"],
    answer: "HTML"
  },
  {
    question: "Which lab involves circuit analysis?",
    options: ["Circuits & Systems", "Web Tech", "DBMS", "AI"],
    answer: "Circuits & Systems"
  },
  {
    question: "Which club promotes technical activities?",
    options: ["Coding Club", "Dance Club", "Drama Club", "Music Club"],
    answer: "Coding Club"
  },
  {
    question: "Which technology styles web pages?",
    options: ["CSS", "HTML", "Python", "C++"],
    answer: "CSS"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// randomize questions
quizData.sort(() => Math.random() - 0.5);

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  selectedOption = null;

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      document.querySelectorAll(".options button")
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedOption = option;
    };
    optionsEl.appendChild(btn);
  });
}

document.getElementById("submit").onclick = () => {
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  if (selectedOption === quizData[currentQuestion].answer) {
    feedbackEl.textContent = "✅ Correct!";
    score++;
  } else {
    feedbackEl.textContent = "❌ Incorrect!";
  }

  currentQuestion++;

  setTimeout(() => {
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      document.querySelector(".quiz-container").classList.add("hidden");
      document.getElementById("result").classList.remove("hidden");
      document.getElementById("score").textContent = score + "/" + quizData.length;
    }
  }, 800);
};

loadQuestion();