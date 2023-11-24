function getData() {
    const cidade = document.getElementById("inputBusca").value;
    const url = `https://pingobras-sg.glitch.me/climatempo/cidade=${cidade}`;
    const options = {
        "method": "GET",
        "mode": "cors",
        "headers": {
            "content-type": "application/json;charset=utf-8",
            "Authorization": "APIKey20231603",
        }
    };


    fetch(url, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text();
            }
        })
        .then((data) => {
            console.log("DATA RESPONSE: ");
            console.log(data);
            
        })
        .catch((error) => alert(error));
}