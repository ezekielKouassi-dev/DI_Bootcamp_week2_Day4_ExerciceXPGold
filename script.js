/**
 * @author : ezekiel kouassi
 */

/* ******************* Exercice 1 ***************** */

function isBlank(character){

    /**
     * @description : cette fonction permet vérifier si'il y a des options
     */

    if(character.toString().length == "") {
        return false;
    }
    return true;
}

isBlank('');

/* ***************** End Exercice 1 ************** */

/* *************** Exercice 2 ******************* */

function abbrevName(character) {
    let abbrevTab = character.toString().split(" ");
    if(abbrevTab.length > 1) {
        return `${abbrevTab[0]} ${abbrevTab[1].charAt(0)}.`;
    }
    return character;
}

abbrevName("Robin Singh");

/* ***************** End Exercice 2 **************** */

/* *************** Exercice 3 ************** */

function swapCase(character) {

    let wordTable = character.split(" ");
    let neWordTableFormated = [];

    for(let word of wordTable) {
        if(word.charAt(0) == word.charAt(0).toUpperCase()) {

            word = word.charAt(0).toLowerCase() + word.substring(1).toUpperCase();
            neWordTableFormated.push(word);

        }
        else {

            word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
            neWordTableFormated.push(word);

        }
    }

    console.log(neWordTableFormated.join(" "));

}

/* ************** End Exercice 3 ***************** */

/* ************** Exercice 4 ***************** */

function isOmnipresent(array, number) {


}

/* **************** End Exercice 4 **************** */