const letter = 'bici coche balon _playstation bici coche peluche'

function listGifts(letter) {
  let arrayLetter = letter.trim().split(' ')
  let letterCorrected = arrayLetter.filter(element => element.indexOf("_") === -1)
  let list = {}

  letterCorrected.forEach(gift => {
    list[gift] = (list[gift] || 0) + 1
  });
  return list
}

const list = listGifts(letter)
console.log(list)