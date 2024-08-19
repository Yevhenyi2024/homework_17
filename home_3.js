function intervalRace(functions, t) {
    return new Promise((resolve, reject) => {
        let results = [];
        let index = 0;
        function runNext() {
            if (index >= functions.length) {
                resolve(results);
                return;
            }

            try {
                results.push(functions[index]());
            } catch (error) {
                reject(error);
                return;
            }

            index++;
            setTimeout(runNext, t); 
        }

        runNext();
    });
}
const func1 = () => "Result 1";
const func2 = () => "Result 2";
const func3 = () => "Result 3";
intervalRace([func1, func2, func3], 1000)
    .then(results => {
        console.log(results); 
    })
    .catch(error => {
        console.error("Error:", error);
    });
