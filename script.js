
document.getElementById("convertir").addEventListener("click", function(){
    let longueur = parseFloat(document.getElementById("longueur").value)
    let unitLong = document.getElementById("long").value
    let unitLon = document.getElementById("lon").value

    // let masse = parseFloat(document.getElementById("masse").value)
    // let unitmasse = parseFloat(document.getElementById("mass").value)
    // let unitmas = parseFloat(document.getElementById("mas").value)

    // let temprature = parseFloat(document.getElementById("temperature").value)
    // let unitemper = document.getElementById("temper").value
    // let unitemp = document.getElementById("temp").value

    // // Conversion de la longueur
    // let longueurConvertie = convertlongueur(longueur, unitLong)
    // let masseConvertie = convertmasse(masse, unitmasse)
    // let tempConvertie = converttemperature(temprature, unitemp)

    // function convertlongueur(longueur, unit) {
        
            if (unitLong = "km") {
                switch (unitLon) {
                    case "mil":
                        longueur = longueur*1000;
                        alert(longueur)
                        break;
                
                    default:
                        break;
                }
            }
        
    // }
    // alert(longueurConvertie);
    // function convertmasse(longueur, unit) {
        
    // }
    // function converttemperature(longueur, unit) {
        
    // }
})