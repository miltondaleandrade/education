const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            // throw new Error("Custom Error!")
            if (i % 2 !== 0) {
                throw new MyError("Odd number!")
            }
            console.log("Even number!");
        } catch (e) {
            // console.log(e.name);
            // console.log(e.message);
            // console.log(e.stack);
            console.warn(e);
        } finally {
            console.log("... finally");
            i++;
        }
    }
}

class MyError {
    constructor(msg) {
        this.name = this.constructor.name;
        this.message = msg;
        this.stack = `${this.name}: ${msg}`;
    }
}

makeError();