const obj = {
  foo: function() {
    console.log('foo function')
  }
}

console.log(obj.foo())

function bar() {
  console.log(arguments[1], arguments[2])
}
bar("abc", "cba")

function baz() {
  
}
