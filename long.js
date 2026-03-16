document.getElementById("convertir").addEventListener("click", function(event){
    event.preventDefault();
    let longueur = parseFloat(document.getElementById("longueur").value);
    let unitLong = document.getElementById("long").value;
    let unitLon = document.getElementById("lon").value;
    let ecran = document.getElementById("ecran");

    let result;

    
        switch (unitLong) {
            case "km":
                switch (unitLon) {
                    case "km":
                        result = longueur;
                        ecran.value = result + " kilomètre"
                        break;
                    case "cm":
                        result = (longueur*1000)/0.01;
                        ecran.value = result + " centimètre"
                        break;
                    case "mil":
                        result = (longueur*1000)/0.001;
                        ecran.value = result + " milimètres"
                        break;
                    case "ya":
                        result = (longueur*1000)/0.9144;
                        ecran.value = result + " yard"
                        break;
                    case "pi":
                        result = (longueur*1000)/0.3048;
                        ecran.value = result + " pied"
                        break;
                    case "pouce":
                        result = (longueur*1000)/0.0254;
                        ecran.value = result + " pouce"
                        break;
                    
                
                    default:
                        break;
                }
                break;
            case "cm":
                switch (unitLon) {
                    case "km":
                        result = (longueur*0.01)/1000
                        ecran.value = result + " kilomètre"
                        break;
                    case "cm":
                        result = longueur;
                        ecran.value = result + " centimètre"
                        break;
                    case "mil":
                        result = (longueur*0.01)/0.001;
                        ecran.value = result + " milimètre"
                        break;
                    case "cm":
                        result = longueur;
                        ecran.value = result + " centimètre"
                        break;
                    case "cm":
                        result = longueur;
                        ecran.value = result + " centimètre"
                        break;
                    case "cm":
                        result = longueur;
                        ecran.value = result + " centimètre"
                        break;
                
                    default:
                        break;
                }
            default:
                break;
        }
                
           
})