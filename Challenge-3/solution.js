const letter = "bici coche (balón) bici coche peluche"

function isValid(letter) {

  let arrayLetter = letter.split('')
  let arrayCharacters = ["(", ")", "{", "}", "[", "]"]

  return arrayCharacters.forEach(element => {

    if (arrayLetter.includes(element)) {
      console.log("si esta" + element)
    } else {
      console.log("no esta" + element)
    }

  })

}

const letterValid = isValid(letter)
console.log(letterValid)