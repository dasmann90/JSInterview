//constructor function 
let Person = function(name,gender,birthyear){
    this.name = name;
    this.gender = gender;
    this.birthyear = birthyear;
}

Person.prototype.calAge = function(){
    const age = new Date().getFullYear() - this.birthyear;
    console.log(age)
}

let john = new Person('John','male',1980);
john.calAge();

// 

const array = [2,3,4];

Array.prototype.squre = function(){
  return  this.map(el => el *el)
}
console.log(array.squre());
