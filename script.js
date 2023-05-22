//Task 1
function replaceValue(string, valueToReplace, valueToReplaceWith){
    let newString = ''
    let indexOfReplace = string.indexOf(valueToReplace)

    for(let i = 0; i < indexOfReplace; i++){
        newString += string[i]
    }

    newString += valueToReplaceWith

    for(let i = (indexOfReplace + valueToReplace.length); i < string.length; i++){
        newString += string[i]
    }

    return newString
}

console.log(replaceValue('sandro', 'nd', 'beka'))


//Task 2
function capitalLetters(string){
    let newString = ''
    for(let i = 0; i < string.length; i++){
        let charCode = string.charCodeAt(i)

        if(charCode >= 97 && charCode <= 122){
            let uppercaseCharCode = charCode - 32
            newString += String.fromCharCode(uppercaseCharCode)
        }else{
            newString += string[i]
        }
    }

    return newString
}

console.log(capitalLetters('Hello wOrld!'))


//Task 3
function sortObjectsByAge(array) {
    return array.sort((a, b) => a.age - b.age)
}

const userArray = [
    {name: 'Lasha', age: 30},
    {name: 'Saba', age: 20},
    {name: 'Sandro', age: 25}
]

console.log(sortObjectsByAge(userArray))