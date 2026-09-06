document.getElementById("convertir").addEventListener("click", function(event){
    event.preventDefault();
    let longueur = parseFloat(document.getElementById("longueur").value);
    let unitLong = document.getElementById("long").value;
    let unitLon = document.getElementById("lon").value;
    let ecran = document.getElementById("ecran");

    let result;
    let metre;

// 1. Convertir l'unité de départ vers le mètre
switch (unitLong) {

    case "km":
        metre = longueur * 1000;
        break;

    case "cm":
        metre = longueur / 100;
        break;

    case "mil":
        metre = longueur / 1000;
        break;

    case "ya":
        metre = longueur * 0.9144;
        break;

    case "pi":
        metre = longueur * 0.3048;
        break;

    case "pouce":
        metre = longueur * 0.0254;
        break;

    default:
        metre = longueur;
        break;
}


// 2. Convertir le mètre vers l'unité souhaitée
switch (unitLon) {

    case "km":
        result = metre / 1000;
        ecran.value = result + " kilomètre";
        break;

    case "cm":
        result = metre * 100;
        ecran.value = result + " centimètre";
        break;

    case "mil":
        result = metre * 1000;
        ecran.value = result + " millimètre";
        break;

    case "ya":
        result = metre / 0.9144;
        ecran.value = result + " yard";
        break;

    case "pi":
        result = metre / 0.3048;
        ecran.value = result + " pied";
        break;

    case "pouce":
        result = metre / 0.0254;
        ecran.value = result + " pouce";
        break;

    default:
        break;
}
                
           
})