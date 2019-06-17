import User from './User';
import './style.scss';

var output = document.getElementById('output');
output.innerHTML = `Hello, I'm ${User.name} and ${User.age} years old.`;

