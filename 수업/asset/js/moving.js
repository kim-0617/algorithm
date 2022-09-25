const wrap = document.querySelector('.wrapper');
const eye = document.querySelector('.eye');
const fraction = 1; // 눈알 움직이는 속도
let followX = 0;
let followY = 0;
let x = 0;
let y = 0;

// followX = 왼쪽 영역에서는 12 오른쪽에서는 -12 인데
// x = 0 부터 시작해서 x = x + (followX - x) * 속도 이다. 왼쪽 영역에 있다 가정해보면,
// x = 0 + (12 - 0) * 1 = 12 이고 다음 재귀 호출에서도 계속 왼쪽 영역에 있다면
// x = 12 followX = 12, x = 12 + (12 - 12) * 속도 해서 계속 12, 오른쪽 영역도 마찬가지
function animate() {
    x += (followX - x) * fraction;
    y += (followY - y) * fraction;
    eye.style.transform = `translate(${-x}px,${-y}px)`;
    wrap.style.transform = `translate(-50%, -50%) perspective(600px) rotateY(${-x}deg) rotateX(${y}deg)`;
    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', function (e) {
    // mouseX,Y는 -100 ~ 100 사이에서 움직인다.
    let mouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    let mouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    followX = (12 * mouseX) / 100; // -12 ~ 12 사이
    followY = (10 * mouseY) / 100; // -10 ~ 10 사이
});

window.addEventListener("keydown", e => {
    switch (e.keyCode) {
        case 37:
            // left
            followX = 12;
            break;

        case 38:
            // up
            followY = 10;
            break;

        case 39:
            // right
            followX = -12;
            break;

        case 40:
            // down
            followY = -10;
            break;

        default:
            break;
    }
})

animate();