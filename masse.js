document.getElementById("convertir").addEventListener("click", function(event){
    event.preventDefault();
    let masse = document.getElementById("masse").value;
    let unitMasse = document.getElementById("mass").value;
    let unitMass = document.getElementById("mas").value;
    let ecran = document.getElementById("ecran");

    if (masse === "") {
        ecran.value = "Entrez la mesure à convertir";
        ecran.style.color = "red";
    }else{
        masse = parseFloat(masse);
    }
    let result;
    let kilogramme;


// ==========================================
// 1. CONVERTIR L'UNITÉ DE DÉPART EN KG
// ==========================================

switch (unitMasse) {

    case "kg":
        kilogramme = masse;
        break;

    case "g":
        kilogramme = masse / 1000;
        break;

    case "mg":
        kilogramme = masse / 1000000;
        break;

    case "t":
        kilogramme = masse * 1000;
        break;

    case "lb":
        kilogramme = masse * 0.45359237;
        break;

    case "oz":
        kilogramme = masse * 0.028349523125;
        break;

    case "st":
        kilogramme = masse * 6.35029318;
        break;

    default:
        kilogramme = masse;
        break;
}


// ==========================================
// 2. CONVERTIR LES KG
// ==========================================

switch (unitMass) {

    case "kg":
        result = kilogramme;
        ecran.value = result + " kilogramme";
        break;

    case "g":
        result = kilogramme * 1000;
        ecran.value = result + " gramme";
        break;

    case "mg":
        result = kilogramme * 1000000;
        ecran.value = result + " milligramme";
        break;

    case "t":
        result = kilogramme / 1000;
        ecran.value = result + " tonne";
        break;

    case "lb":
        result = kilogramme / 0.45359237;
        ecran.value = result + " livre";
        break;

    case "oz":
        result = kilogramme / 0.028349523125;
        ecran.value = result + " once";
        break;

    case "st":
        result = kilogramme / 6.35029318;
        ecran.value = result + " stone";
        break;

    default:
        break;
}
console.log("La console");
console.log(result);
})
console.log("La console");
