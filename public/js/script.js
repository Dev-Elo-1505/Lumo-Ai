const button = document.querySelector('button');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;

button.addEventListener('click', () => {
    recognition.start();
});

recognition.addEventListener('result', (e)=> {
    let last = e.results.length - 1;
    console.log(e.results);
});