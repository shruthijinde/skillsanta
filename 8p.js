const name = { 
    firstName: 'Philip',
    lastName: 'Fry' };
const details= {
job: 'Delivery Boy',
employer: 'Planet Express'
};

const character=Object.assign(name,details);
console.log(character);