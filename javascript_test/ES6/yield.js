// function traversalDom (element, callback) {
//   callback(element)
//   element = element.firstElementChild
//   while (element) {
//     traversalDom(element, callback)
//     element = element.nextElementSibling
//   }
// }

function* traversalDom (element) {
  yield element
  element = element.firstElementChild
  while (element) {
    yield* traversalDom(element)
    element = element.nextElementSibling
  }
}