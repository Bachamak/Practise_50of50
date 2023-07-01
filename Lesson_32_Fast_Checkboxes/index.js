const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');
const clear_btn = document.querySelector('.clear-btn');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOne) {
            fast.checked = false;
        }
        if (cheap === theClickedOne) {
            good.checked = false;
        }
        if (fast === theClickedOne) {
            cheap.checked = false;
        }
    }
}

clear_btn.addEventListener('click', () => {
    good.checked = false;
    cheap.checked = false;
    fast.checked = false;
});
