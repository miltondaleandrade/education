const postData = async (json) => {
    const response = await fetch("https://httpbin.org/post", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify(json)
    });
    const result = await response.json();
    console.log(result);
}

postData({name: "Test Name"});
