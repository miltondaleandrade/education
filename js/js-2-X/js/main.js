const loadUserEmails = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await resp.json();
    const emails = json.map(user => {
        return user.email;
    });
    postToPage(emails);
}

const postToPage = (data) => {
    console.log(data)
}

loadUserEmails();
