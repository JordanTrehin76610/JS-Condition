let entier = +prompt("Rentrez un nombre entier")

if (isNaN(entier)) {

    console.log("L'utilisateur à rentrer une information non valide")

} else if (entier % 2) {

    console.log("Ce nombre est impair")
}
else {

    console.log("Ce nombre est pair")

}