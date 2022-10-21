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

// function q1(num) {
//     let answer = 0;
//     while(num) {
//         answer += num % 10;
//         num = parseInt(num / 10);
//     }
//     return answer;
// }

// console.log(q1(1996));

// function solution(s) {
//     let answer;
//     let stack = [];
//     for (let x of s) {
//         if (x === ')') {
//             while (stack.pop() !== '(');
//         }
//         else stack.push(x);
//     }
//     answer = stack.join('');
//     return answer;
// }
// let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str));

// function solution(arr1, arr2) {
//     let answer = [];
//     arr1.sort();
//     arr2.sort();

//     let p1 = p2 = 0;
//     while(p1 < arr1.length && p2 < arr2.length) {
//         console.log("1",p1, p2);
//         if(arr1[p1] === arr2[p2]) {
//             answer.push(arr1[p1++]);
//             p2++;
//             console.log("2",p1, p2);
//         }
//         else if(arr1[p1] < arr2[p2]) p1++;
//         else p2++;
//     }
//     return answer;
// }

// let a = [1,3,9,5,2];
// let b = [3,2,5,7,8];
// console.log(solution(a,b));

function solution(arr1, arr2) {
    const [row, col] = [arr1.length, arr2[0].length];
    // console.log(row, col); // 3,3
    let answer = new Array(row);
    for (let i = 0; i < row; i++) answer[i] = new Array(col);

    //arr1의 열의 개수 = arr2의 행의 개수, arr1의 i번째 행과 arr2의 j번째 열의 원소들을 곱한 것들의 합이 answer[i][j] 값
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            answer[i][j] = arr1[i].reduce((sum, arr1Value, rowIndex) => {
                console.log(sum, arr1Value, rowIndex, j);
                return sum + (arr1Value * arr2[rowIndex][j]);
            }, 0)
        }
    }
    return answer;
}

solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]);