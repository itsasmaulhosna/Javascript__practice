const student = {
  name: 'maya',
  age: 22,
  profession: 'devloper',
  married: false,
  salary: 50000,
  friends: ['sadia', 'lima', 'mita', 'mina'],
  family: {
    father: 'salam',
    mother: 'salma',
    sister: 'mim',
    car: {
      brand: 'toyota',
      price: 500000,
    },
  },
};
console.log(student.family.car.price);
