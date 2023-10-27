Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx ? Object(ctx) : window;
  ctx.fn = this;
  let res = ctx.fn(...args);
  delete ctx.fn;
  return res;
};

function say(...args) {
  console.log("this", this);
  console.log("args", args);
}

function Dod() {
  name: "Peggy";
}

const a = new Dod();
say.myCall(a, 123);
