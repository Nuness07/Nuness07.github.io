// Consulta qual cidade usuario escolheu
function consulta() {
    var select = document.getElementById('estado');
    // Selecionando value do option
    var value = select.options[select.selectedIndex].value;
    //Selecionando texto do option
    var text = select.options[select.selectedIndex].text;

    document.getElementById('estado-sel').innerHTML = text;

    /*Tentei fazer por woeid(recomendado pela API), mas existe 
    um limite de consultas dos woeids dentro da api, por isso
    optei por fazer com city_name*/
    cidade = text;
    // Substituir chave caso essa bloqueie
    key_api = "aa8fff39";

    //Requisição na API
    var api_url = "https://api.hgbrasil.com/weather?format=json-cors&key="+key_api+"&city_name="+cidade;
    $.ajax({
        url: api_url,
        crossDomain: true,
        dataType: 'json',
        success: function (result) {
            console.log(result)
            var json = result;
            //Resultados JSON
            var temperatura = json.results.temp+"°C";
            var dia = json.results.date;
            var condicao = json.results.description;
            var umidade = json.results.humidity+"%";
            var tempm = json.results.forecast[0].max+"°C";
            var templ = json.results.forecast[0].min+"°C";
            $("#temp").html(temperatura);
            $("#dia").html(dia);
            $("#cond").html(condicao);
            $("#umidade").html(umidade);
            $("#tempm").html(tempm);
            $("#templ").html(templ);
        }
    })


}

function tornarVisivel(){
    $("#invisivel").show();
    }



