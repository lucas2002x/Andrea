const questions = [
    {
      question: "¿Cómo me llamo? (una fácil para empezar)",
      options: ["Josefino", "Anastasio", "Lucas", "Segismundo"],
      correctAnswer: 3
    },
    {
      question: "¿Dónde fué nuestro primer beso?",
      options: ["En mi casa", "En un banco bajo la luz de la luna", "En campo grande", "Nada de besos hasta el matrimonio"],
      correctAnswer: 2
    },
    {
      question: "¿Cúando es mi cumpleaños?",
      options: ["4 de septiembre", "5 de julio", "2 de febrero", "17 de agosto"],
      correctAnswer: 1
    },
    {
      question: "¿Qué fue el primer regalo que te hice?",
      options: ["Un dibujo", "Un oso panda", "Una flor", "Una caja de dulces"],
      correctAnswer: 2
    },
    {
      question: "¿En qué sitio nos quedamos atrapados un día?",
      options: ["En el Vallsur", "En el coche", "En el Carrefour", "En el cine"],
      correctAnswer: 1
    },
    {
      question: "¿Dónde fue nuestra primera cita?",
      options: ["En un parque", "En una cafetería", "En el Rio Shopping", "En el Dalí"],
      correctAnswer: 4
    },
    {
      question: "¿Qué cosa siempre llevamos a juego?",
      options: ["El calzado", "El llavero", "Las cazadoras", "Las pulseras"],
      correctAnswer: 2
    },
    {
      question: "¿Qué sitio queríamos que fuera nuestro primer viaje juntos?",
      options: ["Roma", "Madeira", "Paris", "Ámsterdam"],
      correctAnswer: 2
    },
    {
      question: "¿Qué día fue nuestra primera cita?",
      options: ["2 de Marzo", "19 de Febrero", "7 de Marzo", "15 de Marzo"],
      correctAnswer: 3
    },
    {
      question: "¿Qué libro te compré por Wallapop?",
      options: ["El poder del ahora", "El extranjero", "Luces de bohemia", "Las 48 leyes del poder"],
      correctAnswer: 1
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
 
  function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = question.question;
    
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button, index) => {
      button.innerText = question.options[index];
    });
    
    document.getElementById("feedback").innerText = '';
  }
  
  
  function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    
    if (selectedOption === correctAnswer) {
      score++;
      document.getElementById("feedback").innerText = "¡Correcto!";
    } else {
      document.getElementById("feedback").innerText = "Incorrecto, intenta de nuevo.";
    }
    
    currentQuestionIndex++;
    
    
    if (currentQuestionIndex < questions.length) {
      setTimeout(displayQuestion, 1000);
    } else {
      setTimeout(showResult, 1000);
    }
    
  }
  
 
  function showResult() {
    const resultMessage = score === questions.length
      ? "¡Has ganado! Respondiste todas las preguntas correctamente."
      : `Has respondido correctamente ${score} de ${questions.length} preguntas.`;
    
    document.getElementById("result").innerText = resultMessage;

    if (score === questions.length) {
      setTimeout(() => {
        window.location.href = "https://lucas2002x.github.io/Andrea2/"; 
      }, 2000); 
    }
  }
  
 
  displayQuestion();