let genre = prompt("Rentrez votre genre")
let age = +prompt("Rentrez votre âge")

if (genre !== "homme" && genre !== "femme" || isNaN(age)) {
    console.log("Une information est non conforme")
} else {
    if (age >= 18) {
        console.log(`L'utilisateur est de type ${genre} et est majeur`)
    } else {
        console.log(`L'utilisateur est de type ${genre} et est mineur`)
    }
}