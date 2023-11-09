document.getElementById("play-button").addEventListener("click", function() {
    const languageSelect = document.getElementById("language-select");
    const selectedLanguage = languageSelect.value;
    const word = document.getElementById("word").value;
    
    if (word) {
        const audio = document.getElementById("audio");
        audio.src = `audio/${selectedLanguage}/${word}.mp3`;
        audio.play();
    }
});
