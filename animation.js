function animationRubric() {
    anime({
        targets: '#headline path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2800,
        delay: function(el, i) {return i * 250},
        direction: 'alternate',
        loop: false
    });
}
document.addEventListener('DOMContentLoaded', animationRubric);