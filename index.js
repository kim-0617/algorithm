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

function solution(arr) {
    let dummy = {};
    let concat = [];
    for(let i = 0; i < arr.length; i++) {
        let lcm = [];
        for(let j = 1; j <= 100; j++) {
            lcm.push(arr[i] * j);
        }
        dummy[arr[i]] = lcm;
    }
    
    for(let key in dummy) {
        concat = concat.concat(dummy[key]);
    }
    concat.sort((a, b) => a - b);
    console.log(concat)
    let abcd = [];
    for(let i = 0; i < concat.length; i++) {
        if(abcd.length === 0) abcd.push(concat[i]);
        else if(abcd.at(-1) === concat[i]) abcd.push(concat[i]);
        else abcd = [concat[i]];
        
        if(i >= 140 && i <= 144) console.log(i, concat[i], abcd)
        if(abcd.length === arr.length) break;
    }
    return abcd[0];
}

console.log(solution([1,2,3]))