
const fs = require("fs");
const path = require("path");

const logDirectory = path.join(__dirname, "Logs");

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}


process.chdir(logDirectory);


for (let i = 1; i <= 10; i++) {
    const file = `log${i}.txt`;
    fs.writeFileSync(file, `This is log file number ${i}`);
    console.log(`Created file: ${file}`);
}
