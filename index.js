// const hen = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('😊'), 1000);
//     });
// }

// const egg = (hen) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${hen} => 😘`), 1000);
//     });
// }

// const cook = (egg) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${egg} => 😉`), 1000);
//     })
// }

// console.log(
//     hen()
//         .then(hen => egg(hen))
//         .then(egg => cook(egg))
//         .then(console.log)
// );

const obj = {
    a : 100,
    b : 200,
    c : 'javascript',
}

const {a : name1, b :name2, c : name3} = obj;
console.log(name1)
console.log(name2)
console.log(name3)
