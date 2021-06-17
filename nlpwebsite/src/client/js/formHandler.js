function handleSubmit(event) {
    event.preventDefault();

    let formText = document.getElementById('url').value

    if(Client.checkForURL(formText)) {
    
    postData(`${location.protocol}//${location.host}/api`, {url: formText})
    .then((res) => {
        if (res.polarity == undefined && res.agreement == undefined && res.subjectivity == undefined && res.confidence == undefined && res.irony == undefined) {
            alert('Cannot analyze this article.');
            return;        
        }
        document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`;
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    });
    } else {
        alert('Invalid URL, please try with a valid URL.');
    }
}

const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

export { handleSubmit };