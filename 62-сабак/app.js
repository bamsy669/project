//rest, spread

const girls=['Anna', 'Rose', 'Alexa', 'Kim', 'Naomi']
console.log(girls[1]);

const [,a,b]=girls
console.log(a,b);

const boys=['Jack', 'Bill', 'Steve', 'Marc']

const mixed=[...girls, ...boys]
console.log(mixed);

const letters=[...b ]
console.log(letters);



