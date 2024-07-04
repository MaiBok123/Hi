document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('shuffled-text');
    const finalText = textElement.innerText;
    let interval;
    const duration = 10000; // 10 seconds
    const frameRate = 30; // 30 frames per second
    const totalFrames = duration / frameRate;

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

            iteration += text.length / totalFrames;
        }, frameRate);
    }

    shuffleText(textElement, finalText);

    const soundEffect = document.getElementById('soundEffect');
    
    // เพิ่มการจัดการเหตุการณ์คลิกเพื่อเล่นเสียง
    document.querySelector('header').addEventListener('click', function() {
        // ตรวจสอบว่าเสียงกำลังไม่เล่นอยู่
        if (soundEffect.paused) {
            soundEffect.play(); // เล่นเสียง
        }
    });
});
