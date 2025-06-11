let entier = +prompt("Entrer votre entier")
let entierTernaire = entier % 2 ? "Nombre impair" : "Nombre pair"

if (isNaN(entier)) {
    console.log("L'information est non-conforme")
} else {
    console.log(entierTernaire)
}