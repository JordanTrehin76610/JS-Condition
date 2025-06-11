let entier = +prompt("Entrer votre entier")
let entierTernaire = entier % 2 === 0 ? "Nombre pair" : "Nombre impair"

if (isNaN(entier)) {
    console.log("L'information est non-conforme")
} else {
    console.log(entierTernaire)
}