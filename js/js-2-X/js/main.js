const person = {
    name: "Andrej Istomin",
    position: "Software Developer",
    address: {
        country: "Germany",
        city: "Schwabhausen"
    },
    hobbies: ["football", "music", "reading"]
};

console.log(person);

const json = JSON.stringify(person);
console.log(json);

const deserialised = JSON.parse(json);
console.log(deserialised);