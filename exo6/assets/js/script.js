let mois = +prompt("Rentrez le nombre d'un mois (entre 1 et 12...)")
const NOM_DES_MOIS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
const NOM_DU_MOIS = NOM_DES_MOIS[mois - 1]

if (isNaN(mois) || mois > 12 || mois < 1) {
    console.log("L'information saisie est non-conforme")
} else {
    console.log(NOM_DU_MOIS)
}

// Un switch aurait pu être pertinant bien que trop long