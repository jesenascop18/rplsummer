let currentQuestionIndex = 0;

function startQuiz(questions) {
    displayQuestion(questions, currentQuestionIndex);

    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', (event) => {
            const isCorrect = event.target.getAttribute('data-answer') === 'right';
            if (isCorrect) {
                alert('Correct answer! Moving to the next question.');
                nextQuestion(questions);
            } else {
                alert('Wrong answer! Please try again.');
            }
        });
    });
}

function nextQuestion(questions) {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        alert('You have completed the quiz!');
        return;
    }
    displayQuestion(questions, currentQuestionIndex);
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function displayQuestion(questions, index) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="test-container pre-test-container">
            <h1>${questions[index].title}</h1>
            <div class="question">
                <p>${questions[index].question}</p>
                <p class="highlight">${questions[index].highlight}</p>
            </div>
            <div class="options">
                ${questions[index].options.map(option => `
                    <button class="option ${option.class}" data-answer="${option.answer}">${option.text}</button>
                `).join('')}
            </div>
            <div class="navigation">
                <button class="nav-button" onclick="prevQuestion()">Kembali</button>
                <button class="nav-button" onclick="nextQuestion()">Selanjutnya</button>
            </div>
        </div>
    `;

    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', (event) => {
            const isCorrect = event.target.getAttribute('data-answer') === 'right';
            if (isCorrect) {
                alert('Correct answer! Moving to the next question.');
                nextQuestion(questions);
            } else {
                alert('Wrong answer! Please try again.');
            }
        });
    });
}
