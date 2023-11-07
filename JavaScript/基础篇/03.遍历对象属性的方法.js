const parentObj = {
  a: "aaaaa",
  b: Symbol("bbbbb"),
  c: "ccccc",
};
const Obj = Object.create(parentObj, {
  d: {
    value: "ddddd",
    enumerable: true,
  },
  e: {
    value: "eeeee",
    enumerable: false,
  },
  [Symbol("f")]: {
    value: "fffff",
    enumerable: true,
  },
});

console.log("Object.keys()", Object.keys(Obj)); // Object.keys() [ 'd' ]
console.log("Object.values()", Object.values(Obj)); // Object.values() [ 'ddddd' ]
console.log("Object.entries()", Object.entries(Obj)); // Object.entries() [ [ 'd', 'ddddd' ] ]
console.log("Object.getOwnPropertyNames()", Object.getOwnPropertyNames(Obj)); //Object.getOwnPropertyNames()[("d", "e")];
console.log(
  "Object.getOwnPropertySymbols()",
  Object.getOwnPropertySymbols(Obj)
); // Object.getOwnPropertySymbols() [ Symbol(f) ]
for (let key in Obj) {
  // for in: d
  // for in: a
  // for in: b
  // for in: c
  console.log("for in:", key);
}

for (let value of Object.values(Obj)) {
  // for of: ddddd
  console.log("for of:", value);
}

console.log("Reflect.ownKeys()", Reflect.ownKeys(Obj)); // Reflect.ownKeys() [ 'd', 'e', Symbol(f) ]
