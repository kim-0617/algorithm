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


// function q1() {
//     let num = Math.max(100, Math.min(-100, Math.random() * 1000));
//     return num;
// }

// console.log(q1());

// function q2() {
//     const array = [10, 31, 1, 2, 3 ,4, 32];
//     return array.sort();
// }

// console.log(q2());

// function q3() {
//     const array = [10, 31, 1, 2, 3 ,4, 32];
//     return array.filter(x => Number(String(x).length >= 2));
// }

// console.log(q3());

// function q4() {
//     const array = [10,20,30,40,50];
//     return array.reduce((prev, curr) => prev += curr, 0) / array.length;
// }

// console.log(q4());

// function q5() {
//     return "abcdefghijklmnop".match(/[d-f]/g);
// }

// console.log(q5());

// function q6(a,b,c,d) {
//     const array = [...arguments];
//     return array.reduceRight((prev, curr) => {
//         return prev += curr;
//     }, 0);
// }

// console.log(q6(1,2,3,4));

// function q7() {
//     const str = "taraeaea";
//     return str.split('').map(word => {
//         if(word !== "a") return word;
//     }).join('');
// }

// console.log(q7());

// function q8() {
//     let answer = 0;
//     const array = [1,2,3,4,5];
//     for(let i = 3; i < 8; i++) {
//         if(array.includes(i) || 0) {
//             answer++;
//         }
//     }
//     return answer;
// }

// console.log(q8());

// function q9() {
//     const obj = {
//         a : "가",
//         b : "나",
//         c : "다",
//     };

//     const { c : one, b : two, a : three } = obj;
//     return one + two + three;
// }

// console.log(q9());

// function q10(arr) {
//     let flag = false;
//     let n = 1;
//     while(!flag) {
//         n++;
//         for(let i = 1; i < arr.length; i++) {
//             if((arr[0] * n) % arr[i] === 0) {
//                 flag = true;
//             }
//             else {
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     return arr[0] * n
// }

// console.log(q10([2,6,8,14]));

function q1(num) {
    let answer = 0;
    while(num) {
        answer += num % 10;
        num = parseInt(num / 10);
    }
    return answer;
}

console.log(q1(1996));