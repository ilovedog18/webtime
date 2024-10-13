let timer;
let seconds = 0;

const display = document.getElementById('display');

document.getElementById('start').addEventListener('click', () => {
    timer = setInterval(() => {
        seconds++;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        display.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    display.innerHTML = '00:00:00';
});
