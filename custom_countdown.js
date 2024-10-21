
document.addEventListener('DOMContentLoaded', function () {
    var datanumberElement = document.querySelector('.datanumber');
    if (datanumberElement) {
        var targetNumber = 1000;
        var currentNumber = 0;  // Start counting from 0
        var duration = 5000;  // Total duration of animation (5 seconds)
        var frameDuration = 1000 / 60;  // 60 frames per second
        var totalFrames = Math.round(duration / frameDuration);
        var increment = targetNumber / totalFrames;  // Increment per frame

        function animateNumber() {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                datanumberElement.textContent = targetNumber;
            } else {
                datanumberElement.textContent = Math.round(currentNumber);
                requestAnimationFrame(animateNumber);
            }
        }

        // Start the animation
        animateNumber();
    }
});
