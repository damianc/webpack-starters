import Brand from './Brand';
import Icon from './icon.png';

var output = document.getElementById('output');

var img = document.createElement('img');
img.src = Icon;

var span = document.createElement('span');
span.textContent = Brand.brandName;

output.appendChild(img);
output.appendChild(span);

