
function resolvedPromise() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Resolved promise after 500ms"), 500);
    });
}


function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Rejected promise after 500ms"), 500);
    });
}


resolvedPromise()
    .then(msg => console.log(msg))
    .catch(err => console.error(err));

rejectedPromise()
    .then(msg => console.log(msg))
    .catch(err => console.error(err));
