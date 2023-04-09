let monNom = "achille"
let monNom2 = "coatsaliou"

console.log(monNom)

// Ce code affichera "achille"

const base = `truc ${monNom}`

console.log(base)

const even0r0dd = (number) => {

    if ( (number%2)===0)
        {
            return "even"
        }   else

        {
            return "odd"
        }
}

console.log(even0r0dd(12))

// Capitalisation (bitcoin)

const changeName = (monNom) =>{
    return(
        monNom[0] .toUpperCase() + monNom .substring(1) + " " +
        monNom2[0] .toUpperCase() + monNom2 .substring(1))
}

console.log (changeName(monNom, monNom2))

// Une fonction SumOfNegative qui prend comme paramètre number (array)

// Retourne un nombre

// Appeler la fonction avec un argument

function SumOfNegative (number) {
    let sum = 0
    number.forEach(number => {
        if (number < 0) {
        sum = sum + number
        }
    });
    return sum
}

console.log (SumOfNegative ([-1, 4, -2, 9, 18]))

// Récupérer le bouton par son ID

const bouton = document.getElementById("mon-bouton");

// Ajouter un écouteur d'événement pour le clic sur le bouton

bouton.addEventListener("click", function() {
    window.location.href = "https://urlz.fr/lfRY"
});

// Sélectionner tous les éléments <p>

const paragraphes = document.querySelectorAll("p");

// Parcourir chaque élément et ajouter une classe CSS

for (let i = 0; i < paragraphes.length; i++) {
    paragraphes[i].classList.add("modifie");
}

// Sélectionner l'élément à modifier 

const element = document.querySelector("p");

// Ajouter des écouteurs d'événements pour la souris

element.addEventListener("mouseover", function() {

    // Ajouter la classe CSS "bleu" lorsque la souris survole l'élément

    element.classList.add("bleu");
});

element.addEventListener("mouseout", function() {
 
    // Supprimer la classe CSS bleu lorsque la souris quitte l'élément

    element.classList.remove("bleu");   
});