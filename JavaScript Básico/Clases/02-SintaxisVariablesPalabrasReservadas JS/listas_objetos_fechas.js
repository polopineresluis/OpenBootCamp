//Listas, Array o arreglo

const departamento = ['Sucre','Bolivar','Cordoba','Atlantico','Cesar'];
console.log(departamento);

const capital = new Array();
capital[0] = 'Sincelejo';
capital[1] = 'Cartagena';

console.log(capital);

const agrupados = [departamento,capital];
console.log(agrupados[0][1]);

//Objetos
const persona = {
    nombre: '',
    apellidos: '',
    edad: 28
}

persona.estatura;
persona.estatura = 1.76;
persona.nombre = 'Luis Fernando';
console.log(persona);

//Fechas

const fehaActual = new Date();

console.log(fehaActual);

const dia = fehaActual.getDate();
console.log(dia);

if (dia === 16) {
    console.log(`Hoy es Jueves ${fehaActual}`);
}
else{
    console.log(`Hoy es Viernes ${dia}`)
}