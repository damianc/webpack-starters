import Component from './Component';

var nameElem = Component.companyName('Dynamix');
var addressElem = Component.companyAddress({
	zip: '12-345',
	city: 'Atlanta',
	street: 'Roosevelt St.',
	building: 120
});

var output = document.getElementById('output');

var companyItem = document.createElement('div');
companyItem.appendChild(nameElem);
companyItem.appendChild(addressElem);

if (output) output.appendChild(companyItem);
