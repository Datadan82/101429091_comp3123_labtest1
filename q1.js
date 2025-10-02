
function lowerCaseWords(inputList) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputList)) {
            reject("Input must be an array");
            return;
        }

        const words = inputList
            .filter(element => typeof element === "string")
            .map(str => str.toLowerCase());

        resolve(words);
    });
}


lowerCaseWords(["PIZZA", 10, true, "ApPlE", "OrAnGe"])
    .then(result => console.log(result))
    .catch(error => console.error(error));

