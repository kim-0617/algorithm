// // const hen = () => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => resolve('😊'), 1000);
// //     });
// // }

// // const egg = (hen) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => resolve(`${hen} => 😘`), 1000);
// //     });
// // }

// // const cook = (egg) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => resolve(`${egg} => 😉`), 1000);
// //     })
// // }

// // console.log(
// //     hen()
// //         .then(hen => egg(hen))
// //         .then(egg => cook(egg))
// //         .then(console.log)
// // );

// const obj = {
//     a : 100,
//     b : 200,
//     c : 'javascript',
// }

// const {a : name1, b :name2, c : name3} = obj;
// console.log(name1)
// console.log(name2)
// console.log(name3)


function q1() {
    let maxVal = Math.max(100, Math.min(-100, Math.random() * 1000));
    return maxVal;
}

console.log(q1());

function q2() {
    const array = [10, 31, 1, 2, 3 ,4, 32];
    return array.sort();
}

console.log(q2());

function q3() {
    const array = [10, 31, 1, 2, 3 ,4, 32];
    return array.filter(x => Number(String(x).length >= 2));
}

console.log(q3());

function q4() {
    const array = [10,20,30,40,50];
    return array.reduce((prev, curr) => prev += curr, 0) / array.length;
}

console.log(q4());

function q5() {
    return ""
}

console.log(q4());