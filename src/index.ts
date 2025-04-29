import './style.scss';
import sun from './assets/icons/sun.svg'
import rain from './assets/icons/cloud-rain.svg';
import snow from './assets/icons/cloud-snow.svg';
import pause from './assets/icons/pause.svg';



const greeting: string = "Hello, TypeScript with Webpack!";
console.log(greeting);

const containerDiv = document.getElementsByClassName('container')[0];
const sunBox = document.getElementsByClassName('sun')[0];
const sunImg = document.createElement('img');
sunImg.src = sun;
sunBox.append(sunImg);

const rainBox = document.getElementsByClassName('rain')[0];
const rainImg = document.createElement('img');
rainImg.src = rain;
rainBox.append(rainImg);

const snowBox = document.getElementsByClassName('snow')[0];
const snowImg = document.createElement('img');
snowImg.src = snow;
snowBox.append(snowImg);


sunBox.addEventListener('click', (e) => {
    console.log('click');
    containerDiv.classList.add('sunBG');
    containerDiv.classList.remove('rainBG', 'snowBG')
})

rainBox.addEventListener('click', (e) => {
    console.log('click');
    containerDiv.classList.add('rainBG');
    containerDiv.classList.remove('sunBG', 'snowBG')
})

snowBox.addEventListener('click', (e) => {
    console.log('click');
    containerDiv.classList.add('snowBG');
    containerDiv.classList.remove('sunBG', 'rainBG')
})




