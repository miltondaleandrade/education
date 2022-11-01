const myobj = {
    name: "Test Obj",
    arr: ["One", "Two", "Three"],
    print: function () {
        console.log(`Name: ${this.name}; arr: ${this.arr}`)
    }
};

const inherited = Object.create(myobj);
inherited.obj = {
    nested: "Nexted"
}

inherited.printAll = function () {
    console.log("Parent:");
    this.print();
    console.log(`Mine: ${this.obj}`);
}

inherited.printAll();