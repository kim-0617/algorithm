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

function solution(people, limit) {
    let answer = 0;
    people.sort((a,b) => a - b);
    let candidate = [];
    
    let j = 0;
    while(j<5) {
        j++;
        let mod = limit - people.at(-1);
        // console.log(mod, people)
        for(let i = 0; i < people.length - 1; i++) {
            if(mod >= people[i]) {
                candidate.push(people[i]);
                mod -= people[i];
                console.log(mod)
            }
            else {
                if(candidate.length !== 0) people.splice(people.indexOf(candidate.at(-1)), 1);
                people.splice(people.indexOf(people.at(-1)), 1);
                candidate = [];
                break;
            }     
        }
    }
    return answer;
}

solution([70, 50, 80, 50], 100);