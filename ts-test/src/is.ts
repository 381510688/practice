
function isString (content: any) : content is String{
  return typeof content === 'string'
}


function test (value: any) {
  if (isString(value)) {
    console.log('isString')
    console.log(value.toFixed(2))
  }
}
