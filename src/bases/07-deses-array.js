const personajes =['Goku', 'Vegeta', 'Trunks' ]

const [ goku ] =personajes;

//onsole.log(goku);


const retornArray = () => {
  return ['ABC', 123]
};

const [ letters, numbers] = retornArray();

// console.log(letters, numbers);

//Homework
// 1. El primer valor del arr se llamarĂ¡ nombre
// 2. Se llamarĂ¡ setName

const usaStates = (valor) => {
  return [valor, () => { console.log('Hello Mundo')}]
};

const [name, setName]= usaStates('Goku');

console.log(name)
setName();


