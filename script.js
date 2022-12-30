// Exercice 1
function isBlank(character){
    if(character.toString().length == "") {
        return false;
    }
    return true;
}
isBlank('');

// Exercice 2
// mettre à jour pour rendre plus optimisé

function abbrevName(character) {
    let abbrevTab = character.toString().split(" ");
    if(abbrevTab.length > 1) {
        return `${abbrevTab[0]} ${abbrevTab[1].charAt(0)}.`;
    }
    return character;
}

abbrevName("Robin Singh");

// Exercice 3

function swapCase(character) {

}