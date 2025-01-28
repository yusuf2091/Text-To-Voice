let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("#voiceSelect");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

document.querySelector("button").addEventListener("click", () => {
    let text = document.querySelector("textarea").value;
    if (text) {
        speech.text = text;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter some text.");
    }
});
