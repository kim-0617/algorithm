const fs = require("fs");

const filelistArray = [];
fs.readdir("./02", (error, filelist) => {
  for (let i = 0; i < filelist.length; i++) {
    filelistArray.push(filelist[i]);
    console.log("- ", filelist[i]);
  }
});

console.log("first");
