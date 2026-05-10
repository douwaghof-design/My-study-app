// Screen Switching
const startBtn = document.getElementById('start-btn');
const backHome = document.getElementById('back-home');
const homeScreen = document.getElementById('home-screen');
const workScreen = document.getElementById('work-screen');

startBtn.addEventListener('click', () => {
    homeScreen.classList.remove('active');
    workScreen.classList.add('active');
});

backHome.addEventListener('click', () => {
    workScreen.classList.remove('active');
    homeScreen.classList.add('active');
});

// Step 2 Logic: Subject & Colors
const subjectInput = document.getElementById('subject-input');
const palette = document.getElementById('color-palette');
const statusMsg = document.getElementById('status-message');

const colors = [
    '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3',
    '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a',
    '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'
];

colors.forEach(color => {
    const dot = document.createElement('div');
    dot.className = 'color-circle';
    dot.style.backgroundColor = color;
    dot.addEventListener('click', () => {
        subjectInput.style.color = color;
    });
    palette.appendChild(dot);
});

// Pomodoro Logic
document.querySelectorAll('.timer-opt').forEach(btn => {
    btn.addEventListener('click', () => {
        const mins = btn.getAttribute('data-mins');
        if (subjectInput.value.trim() === "") {
            alert("Please enter a subject first!");
        } else {
            statusMsg.innerText = `Let's go! Focusing on ${subjectInput.value} for ${mins} mins.`;
        }
    });
});
