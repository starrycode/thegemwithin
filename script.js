const questions = [
    {
      question: "How do you recharge?",
      options: [
        { text: "Partying with friends", type: "E" },
        { text: "Quiet time alone", type: "I" }
      ]
    },
    {
      question: "Which sounds more like you?",
      options: [
        { text: "Realistic, practical", type: "S" },
        { text: "Imaginative, abstract", type: "N" }
      ]
    },
    {
      question: "How do you decide?",
      options: [
        { text: "Logic first", type: "T" },
        { text: "Feelings matter", type: "F" }
      ]
    },
    {
      question: "What's your lifestyle?",
      options: [
        { text: "Organized & planned", type: "J" },
        { text: "Flexible & spontaneous", type: "P" }
      ]
    }
  ];
  
  let current = 0;
  let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  const quizDiv = document.getElementById("quiz");
  const nextBtn = document.getElementById("next-btn");
  const resultDiv = document.getElementById("result");
  
  function showQuestion() {
    const q = questions[current];
    quizDiv.innerHTML = `<p>${q.question}</p>` + q.options.map((o, i) =>
      `<label><input type="radio" name="option" value="${o.type}"> ${o.text}</label><br/>`
    ).join('');
  }
  
  function showResult() {
    const type = (scores.E >= scores.I ? "E" : "I") +
                 (scores.S >= scores.N ? "S" : "N") +
                 (scores.T >= scores.F ? "T" : "F") +
                 (scores.J >= scores.P ? "J" : "P");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `<h2>Your MBTI type is ${type}!</h2><p>Now meet your inner princess...</p>`;
    quizDiv.classList.add("hidden");
    nextBtn.classList.add("hidden");
  }
  
  nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) return alert("Choose an option!");
    scores[selected.value]++;
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  showQuestion();
  