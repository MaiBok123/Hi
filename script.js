document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('shuffled-text');
    const finalText = textElement.innerText;
    const typingSpeed = 100; // Adjust typing speed here (milliseconds per character)
    let index = 0;

    function typeText() {
        if (index < finalText.length) {
            textElement.innerText += finalText[index];
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    textElement.innerText = ''; // Clear the text content before typing starts
    typeText();

    const soundEffect = document.getElementById('soundEffect');
    document.querySelector('header').addEventListener('mouseover', function() {
        soundEffect.play();
    });

    soundEffect.play();
});
