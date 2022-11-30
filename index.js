function solution(fees, records) {
  let answer = [];
  const limit = 1439;

  const candidate = [];
  for (let i = 0; i < records.length; i++) {
    let target = records[i].split(" ")[1];
    if (!candidate.includes(target)) {
      candidate.push(target);
    }
  }
  candidate.sort();

  let obj = {};
  candidate.forEach((x, i) => {
    obj[x] = records.filter((y) => y.split(" ")[1] === x);
    if (obj[x].length % 2 === 1) {
      obj[x].push(`23:59 ${x} OUT`);
    }
  });
  console.log(Object.keys(obj).sort());

  return answer;
}

const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

solution(fees, records);
