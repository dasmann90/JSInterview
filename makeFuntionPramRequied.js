function checkPrams() {
  throw new Error("Pram is require");
}

function getName(name = checkPrams()) {
  console.log(name);
}

getName("Mangal");
getName();
