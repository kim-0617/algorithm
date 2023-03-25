const fs = require("fs");

const filelistArray = [];
fs.readdir("./01", (error, filelist) => {
  for (let i = 0; i < filelist.length; i++) {
    filelistArray.push(filelist[i]);
  }

  console.log(filelistArray.length);
});

console.log("first");
