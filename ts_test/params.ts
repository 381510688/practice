function test (data : string | Array<any>): void {
  if (Array.isArray(data)) {
    for (let item of data) {
      test(item)
    }
  } else {
    _do(data)
  }
}

function _do (params: string): void {
  console.log(params)
}

test('start')
test(['1', '2'])
test(['3', ['4', '5']])