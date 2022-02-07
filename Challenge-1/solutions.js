const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
  return ovejas.filter(({name, color}) => {
    if ( (name.indexOf('N') !== -1 && name.indexOf('a') !== -1 && color === 'rojo') ) {
      return ovejas
    }
  });
}

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)