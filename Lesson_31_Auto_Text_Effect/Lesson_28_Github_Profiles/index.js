const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'I Love Programming!';
let index = 1;
let speed = 500 / speedEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {  
        index = 1;
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 500 / e.target.value);