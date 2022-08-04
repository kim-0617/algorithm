const wrapper = document.querySelector('#wrapper');
const total = 12;
const colors = ['red', 'blue', 'white', 'yellow', 'green', 'pink'];
let colorCopy = colors.concat(colors);
let shuffled = []; // 카드색 섞기
let clicked = []; // 클릭된 카드
let completed = []; // 짝이 맞추어진 카드
let clickable = false; // 클릭 할 수 있나 없나 플래그변수
let startTime; // 시간초 재기

const shuffle = () => {
    while (colorCopy.length !== 0) {
        let randomIndex = Math.floor(Math.random() * colorCopy.length);
        shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
    }
}

const createCard = (i) => {
    const card = document.createElement('div');
    card.className = 'card';
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    const cardFront = document.createElement('div');
    cardFront.classList = 'card-front';
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.style.background = shuffled[i];

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    return card;
}

const onClickCard = function () { // this로 사용하려면 function 키워드로 => 그래야 this가 card를 가리킴
    if (clickable && !completed.includes(this) && !(clicked[0] === this)) {
        this.classList.toggle('filpped');
        clicked.push(this);
        if (clicked.length !== 2) return; // 2개 안뒤집혔으면
        const firstColor = clicked[0].querySelector('.card-back').style.background;
        const secondColor = clicked[1].querySelector('.card-back').style.background;
        if (firstColor === secondColor) { // 색이같으면
            completed = completed.concat(clicked); // 완료배열에 push
            clicked = [];
            if (completed.length === total) {
                setTimeout(() => {
                    let total = new Date() - startTime;
                    alert(`축하합니다! ${total / 1000}초 걸렸습니다.`);
                    resetGame();
                    return;
                }, 500);
            }
            return;
        }
        clickable = false;
        setTimeout(() => {
            clicked[0].classList.remove('filpped');
            clicked[1].classList.remove('filpped');
            clicked = [];
            clickable = true;
        }, 500);
    }
}

const startGame = () => {
    shuffle();
    for (let i = 0; i < total; i++) {
        let card = createCard(i);
        card.addEventListener('click', onClickCard);
        wrapper.appendChild(card);
    }
    document.querySelectorAll('.card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('filpped');
        }, 1000 + (100 * index));
    });
    document.querySelectorAll('.card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.remove('filpped');
            clickable = true;
            startTime = new Date();
        }, 5000);
    })
}

const resetGame = () => {
    wrapper.innerHTML = '';
    colorCopy = colors.concat(colors);
    shuffled = [];
    completed = [];
    clickable = false;
    startGame();
}

startGame();