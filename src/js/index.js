function getData() {
    const cidade = document.getElementById("inputBusca");
    const url = `https://pingobras-sg.glitch.me/api/climatempo/cidade=${cidade}`;
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
            preencherDados(data, cidade);
        })
        .catch((error) => alert(error));
}

function preencherDados(data, cidade) {
    const labelCidade = document.getElementById("cidade");

    labelCidade.textContent = cidade
}