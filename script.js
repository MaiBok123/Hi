document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('shuffled-text');
    const finalText = textElement.innerText;
    let interval;

    function getRandomChar() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return chars[Math.floor(Math.random() * chars.length)];
    }

    function shuffleText(element, text) {
        let iteration = 0;
        interval = setInterval(() => {
            element.innerText = text
                .split('')
                .map((char, index) => {
                    if (index < iteration) {
                        return text[index];
                    }
                    return getRandomChar();
                })
                .join('');

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }

    shuffleText(textElement, finalText);

    const soundEffect = document.getElementById('soundEffect');
    document.querySelector('header').addEventListener('mouseover', function() {
        soundEffect.play();
    });
});
