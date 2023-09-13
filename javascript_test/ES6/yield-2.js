function* nameGenerator(name) {
  const fullname = yield (`${name}·li`)
  yield (`${fullname}`)
}

// var myIterator = nameGenerator('Camille')
// console.log(myIterator.next())
// // console.log(myIterator.next('gang'))
// console.log(myIterator.next())
// console.log(myIterator.next())

var myIterator = nameGenerator()
console.log(myIterator.next('Camile'))
console.log(myIterator.next('Gang'))
console.log(myIterator.next())