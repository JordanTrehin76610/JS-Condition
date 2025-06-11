let moyenne = +prompt("Rentrez la moyenne d'un élève de l'afpa")

if (isNaN(moyenne) || moyenne > 20 || moyenne < 0) {
    console.log("L'information saisie est non-conforme")
} else {
    if (moyenne === 0) {
        console.log("Un rendez-vous est programmé")
    }
    if (moyenne >= 1 && moyenne <= 5) {
        console.log("Trimestre insuffisant")
    }
    if (moyenne >= 6 && moyenne <= 10) {
        console.log("Trimestre moyen")
    }
    if (moyenne >= 11 && moyenne <= 13) {
        console.log("Bon trimestre")
    }
    if (moyenne >= 14 && moyenne <= 18) {
        console.log("Excellent trimestre")
    }
    if (moyenne > 18 && moyenne < 21) {
        console.log("Félicitation")
    }
}