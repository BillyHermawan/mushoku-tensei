// DATA QUIZ
const questions = [
    { q: "Siapa nama asli ayah Rudeus?", a: "Paul Greyrat", options: ["Paul Greyrat", "Philip Greyrat", "Sauros Greyrat"] },
    { q: "Apa elemen sihir pertama yang dikuasai Rudeus?", a: "Air", options: ["Api", "Air", "Tanah"] },
    // Tambahkan hingga 10 pertanyaan di sini...
];

let currentQuestionIndex = 0;

function showQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('question').innerText = q.q;
    const btnContainer = document.getElementById('answer-buttons');
    btnContainer.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => {
            if(opt === q.a) alert("Benar! Level Mana meningkat!");
            else alert("Salah! Coba belajar lagi di Akademi.");
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            showQuestion();
        };
        btnContainer.appendChild(btn);
    });
}

// MINI GAME: MANA COLLECTOR
let score = 0;
const ball = document.getElementById('mana-ball');

ball.addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = score;
    moveBall();
});

function moveBall() {
    const x = Math.random() * 90;
    const y = Math.random() * 80;
    ball.style.left = x + "%";
    ball.style.top = y + "%";
}

// Inisialisasi
showQuestion();
moveBall();
