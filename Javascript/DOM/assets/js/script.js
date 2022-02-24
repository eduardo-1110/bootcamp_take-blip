function changeMode(){
    changeClass();
    changeText();
}

function changeClass(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText(){
    const darkMode = 'Dark Mode';
    const ligthMode = 'Light Mode';
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + 'ON';
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + 'ON';
}
const button = document.getElementById('mode-selector');
const h1 = document.getElementsByTagName('h1')[0];
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

const darkModeClass = 'dark-mode';


button.addEventListener('click',changeMode);