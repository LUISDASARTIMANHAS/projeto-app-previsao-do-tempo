function getData() {
    const cidade = document.getElementById("inputBusca").value;
    const key = "cd31863ae267407cb01212131232011"
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${cidade}&aqi=no&lang=pt
    `

    if(!cidade) return;
    fetch(apiUrl)
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
            if(data.current) preencherDados(data);
        })
        .catch((error) => console.error(error));
}

function preencherDados(data) {
    const labelCidade = document.getElementById("cidade");
    const labelTemperatura = document.getElementById("temperatura");
    const labelCondicao = document.getElementById("condicao");
    const labelHumidade = document.getElementById("humidade");
    const labelVelocidadeVento = document.getElementById("velocidadeVento");
    const labelIcon = document.getElementById("iconeCondicao");

    const cidade = data.location.name
    const temperatura = data.current.temp_c;
    const condicao = data.current.condition.text;
    const humidade = data.current.humidity;
    const velocidadeVento = data.current.wind_kph;
    const iconeCondicao = data.current.condition.icon;

    labelCidade.textContent = cidade;
    labelTemperatura.textContent = temperatura + "°C";
    labelCondicao.textContent = condicao;
    labelHumidade.textContent = humidade + "%";
    labelVelocidadeVento.textContent = velocidadeVento + "km/h";
    labelIcon.setAttribute("src",iconeCondicao);
}