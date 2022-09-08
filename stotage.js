// localStorage.setItem('name', 'takbir');
localStorage.setItem('Person', JSON.stringify({Name: 'takbir', age: 22, profession: 'programmer'}));

// const person = localStorage.getItem('Person');
// const perse = JSON.parse(person);
const person = JSON.parse(localStorage.getItem('Person'));
console.log(person);
// console.log(perse)
//* array of object
localStorage.setItem('Person2', JSON.stringify([{Name: 'Mohammed', Age: 23, profession: 'Developer'}, {person3: 'Hossain', Age: 24, profession: 'Designer'}]))