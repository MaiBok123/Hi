document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('shuffled-text');
    const finalText = textElement.innerText;
    const duration = 10000; // 10 seconds
    const frameRate = 30; // 30 frames per second
    const totalFrames = duration / frameRate;
    let interval;

    function getRandomChar() {
        const chars = 'ภถคตจขชพรนยบลฟหกดสวงฃผปอทมฝฎฑธณญฐฤฆฏฌษศซฅฉฮฒฬ';
        return chars[Math.floor(Math.random() * chars.length)];
    }

    function shuffleText(element, text) {
        let iteration = 0;
        interval = setInterval(() => {
            element.innerText = text
                .split('')
                .map((char, index) => (index < iteration ? text[index] : getRandomChar()))
                .join('');

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += text.length / totalFrames;
        }, frameRate);
    }

    shuffleText(textElement, finalText);

    const soundEffect = document.getElementById('soundEffect');
    document.querySelector('header').addEventListener('mouseover', function() {
        soundEffect.play();
    });

    soundEffect.play();
});
