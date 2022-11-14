const myUsers = {
    users: []
}

const loadUser = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    return await resp.json();
}

const buildUsers = async () => {
    myUsers.users = await loadUser();
}

await buildUsers();

console.log(myUsers.users);
