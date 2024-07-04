document.addEventListener('DOMContentLoaded', function() {
    const soundEffect = document.getElementById('soundEffect');

    document.querySelector('header').addEventListener('mouseover', function() {
        soundEffect.play();
    });
});
