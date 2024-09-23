async function getResponse() {
    const response = await fetch(
        "https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available"
    );
    const json = await response.json();
    const sliceJson = json.slice(0, 15);
    for (let key in sliceJson) {
        console.log(sliceJson[key])
    }
}

getResponse()
