const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
console.log(users);

// properly:
fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => {
        return resp.json();
    })
    .then(json => {
        json.forEach(user => {
            console.log(user.name);
        })
    })
