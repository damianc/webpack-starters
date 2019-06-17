import User from './User';
import './style.css';

var output = document.getElementById('output');
output.innerHTML = `Hello, I'm ${User.name} and ${User.age} years old.`;

