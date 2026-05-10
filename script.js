const startBtn = document.getElementById('start-btn');
const quitBtn = document.getElementById('quit-btn');
const homeScreen = document.getElementById('home-screen');
const workScreen = document.getElementById('work-screen');

startBtn.addEventListener('click', () => {
    homeScreen.classList.remove('active');
    workScreen.classList.add('active');
});

quitBtn.addEventListener('click', () => {
    if(confirm("Exit App?")) {
        document.body.innerHTML = "<h1>App Closed</h1>";
    }
});
