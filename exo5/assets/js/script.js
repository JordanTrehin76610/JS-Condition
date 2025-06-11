let moyenne = +prompt("Rentrez la moyenne d'un élève de l'afpa")

if (isNaN(moyenne) || moyenne > 20 || moyenne < 0) {
    console.log("L'information saisie est non-conforme")
} else {
    if (moyenne === 0) {
        console.log("Un rendez-vous est programmé")
    }
    else if (moyenne <= 5) {
        console.log("Trimestre insuffisant")
    }
    else if (moyenne <= 10) {
        console.log("Trimestre moyen")
    }
    else if (moyenne <= 13) {
        console.log("Bon trimestre")
    }
    else if (moyenne <= 18) {
        console.log("Excellent trimestre")
    }
    else {
        console.log("Félicitation")
    }
}