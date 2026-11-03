// Object methods

const student = {
  name: "John",
  age: 22,
  hobbies: ["Reading", "Bassketball"],
  parents: {
    mother: {
      name: "Anna",
      age: 36,
    },
    father: {
      name: "Bob",
      age: 42,
    }

  },
  
  getInfo:function(){
    console.log(`This is ${this.name} and his is ${this.parents.father.name}'s son`);
    
  }

}
console.log(student);

student.getInfo()
