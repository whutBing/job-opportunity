Function.prototype.myApply = function (ctx, args) {
  ctx = ctx ? Object(ctx) : window;
  ctx.fn = this;
  let res = args ? ctx.fn(...args) : ctx.fn();
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
say.myApply(a, [1, 2, 3, 4]);
