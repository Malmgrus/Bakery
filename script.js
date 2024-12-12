function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function animationRubric() {
    anime({
        targets: '#headline path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2800,
        delay: function(el, i) {return i * 450},
        direction: 'alternate',
        loop: true
    });
}

document.addEventListener('DOMContentLoaded', animationRubric);