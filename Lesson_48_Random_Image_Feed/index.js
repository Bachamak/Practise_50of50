const container = document.querySelector('.container')
const unsplashURL = 'https://loremflickr.com/'
const rows = 15

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}/${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 400
}