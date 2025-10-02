
const fs = require("fs");
const path = require("path");

const logDirectory = path.join(__dirname, "Logs");

if (fs.existsSync(logDirectory)) {

    fs.readdirSync(logDirectory).forEach(file => {
        fs.unlinkSync(path.join(logDirectory, file));
        console.log(`Deleted file: ${file}`);
    });


    fs.rmdirSync(logDirectory);
    console.log("Logs directory removed");
} else {
    console.log("Logs directory does not exist");
}
