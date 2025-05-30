const obj = {
  a: 1,
  b: 2,
  sum () {
    return this.a + this.b;
  },
};

const sum1 = obj.sum.bind(obj);
console.log(sum1())
