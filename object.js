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

// arguments
function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments);
}
console.log(add(12, 13));

// products
const products = [
  { name: 'laptop', price: 45000, brand: 'lenovo', color: 'silver' },
  { name: 'Laptop', price: 145000, brand: 'macbook', color: 'silver' },
  { name: 'phone', price: 15000, brand: 'samsung', color: 'black' },
  { name: 'watch', price: 5000, brand: 'casio', color: 'golden' },
  { name: 'sunglass', price: 3000, brand: 'ribon', color: 'black' },
];
function matchProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
console.log(matchProducts(products, 'laptop'));
