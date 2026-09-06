document.getElementById("convertir").addEventListener("click", function(event){
    event.preventDefault();
    let temperature = document.getElementById("temperature").value;
    let unitTemp = document.getElementById("temper").value;
    let unitTem = document.getElementById("temp").value;
    let ecran = document.getElementById("ecran");
    let result;

switch (unitTemp) {

    // ==========================================
    // CELSIUS
    // ==========================================

    case "c":

        switch (unitTem) {

            case "c":
                result = temperature;
                ecran.value = result + " °C";
                break;

            case "f":
                result = (temperature * 9 / 5) + 32;
                ecran.value = result + " °F";
                break;

            case "k":
                result = temperature + 273.15;
                ecran.value = result + " K";
                break;

            default:
                break;
        }

        break;


    // ==========================================
    // FAHRENHEIT
    // ==========================================

    case "f":

        switch (unitTem) {

            case "c":
                result = (temperature - 32) * 5 / 9;
                ecran.value = result + " °C";
                break;

            case "f":
                result = temperature;
                ecran.value = result + " °F";
                break;

            case "k":
                result = (temperature - 32) * 5 / 9 + 273.15;
                ecran.value = result + " K";
                break;

            default:
                break;
        }

        break;


    // ==========================================
    // KELVIN
    // ==========================================

    case "k":

        switch (unitTem) {

            case "c":
                result = temperature - 273.15;
                ecran.value = result + " °C";
                break;

            case "f":
                result = (temperature - 273.15) * 9 / 5 + 32;
                ecran.value = result + " °F";
                break;

            case "k":
                result = temperature;
                ecran.value = result + " K";
                break;

            default:
                break;
        }

        break;


    default:
        break;
}
})