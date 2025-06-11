let entier = +prompt("Rentrez un nombre entier")

if (isNaN(entier)) {
    console.log("L'utilisateur à rentrer une information non valide")
} else if (entier % 2 === 0) {
    console.log("Ce nombre est pair")
}
else {
    console.log("Ce nombre est impair")
}