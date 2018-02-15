const cesarButton = document.getElementsByTagName('a')[0];
const cesarBody = document.getElementById('cesar');

cesarButton.addEventListener('click', () => {
    cesarBody.style.display = 'block';
    secondBody.style.display = 'none';
    vernamBody.style.display = 'none';
});

const secondButton = document.getElementsByTagName('a')[1];
const secondBody = document.getElementById('second');
secondBody.style.display = 'none';

secondButton.addEventListener('click', () => {
    secondBody.style.display = 'block';
    cesarBody.style.display = 'none';
    vernamBody.style.display = 'none';
});

const vernamButton = document.getElementsByTagName('a')[2];
const vernamBody = document.getElementById('vernam');
vernamBody.style.display = 'none';

vernamButton.addEventListener('click', () => {
    vernamBody.style.display = 'block';
    cesarBody.style.display = 'none';
    secondBody.style.display = 'none';
});