'use strict';
const app = document.querySelector('#app');
const container = document.createElement('div');
const containerColor = document.createElement('div');
const firstColor = document.createElement('div');
const secondColor = document.createElement('div');
const nameColor1 = document.createElement('div');
const nameColor2 = document.createElement('div');
const containerBtn = document.createElement('div');
const btnStart = document.createElement('button');
const btnEnd = document.createElement('button');

container.classList.add('app__container');
containerColor.classList.add('app__container-color');
firstColor.classList.add('container-color__first-color');
secondColor.classList.add('container-color__second-color');
nameColor1.classList.add('first-color__color-name');
nameColor2.classList.add('second-color__color-name');
containerBtn.classList.add('app__container-btn');
btnStart.classList.add('app__btn-start');
btnEnd.classList.add('app__btn-end');



btnStart.textContent = 'START';
btnEnd.textContent = 'END';

app.append(container);
container.append(containerColor, containerBtn);
containerColor.append(firstColor, secondColor);
containerBtn.append(btnStart, btnEnd);
firstColor.append(nameColor1);
secondColor.append(nameColor2);


function randomGradient() {
    let randomRGB = () => Math.floor(Math.random() * 255 + 1);
    const bg1 = `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${Math.random().toFixed(1)})`;
    const bg2 = `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${Math.random().toFixed(1)})`;
    
    nameColor1.innerText = bg1;
    nameColor2.innerText = bg2;

    app.style.background = `linear-gradient(${bg1} 30%, ${bg2} 100%)`;
    return
};

btnStart.addEventListener('click', () => {
    randomGradient();
    btnStart.textContent = 'NEXT';
    btnEnd.style.display = "block";
    firstColor.style.display = "flex";
    secondColor.style.display = "flex";
});

btnEnd.addEventListener('click', () => {
    app.style.background = "white";
    btnEnd.style.display = "none";
    btnStart.textContent = "START";
    firstColor.style.display = "none";
    secondColor.style.display = "none";
})

