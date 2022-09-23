const wrap = document.querySelector('.wrapper');
const eye = document.querySelector('.eye');
const fraction = 1 / 12;
let followX = 5;
let followY = 10;
let x = 0; 
let y = 0;

// 
function animate() { 
    x += (followX - x) * fraction;
    y += (followY - y) * fraction;

    eye.style.transform = `translate(${-x}px,${-y}px)`;
    wrap.style.transform = `translate(-50%, -50%) perspective(600px) rotateY(${-x}deg) rotateX(${y}deg)`;
    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', function(e) {
    let mouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    let mouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    followX = (12 * mouseX) / 100;
    followY = (10 * mouseY) / 100;
});

animate();