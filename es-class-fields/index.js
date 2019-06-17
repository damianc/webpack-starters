import Cat from './Cat';

var kitkat = new Cat('Kitkat');

var output = document.getElementById('output');
output.innerHTML = `Cat ${kitkat.name} weighs ${kitkat.weight} and screams ${Cat.sound}.`;
