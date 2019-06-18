import Address from './iAddress.ts';

export default class Component {
	static nameHeading = 'h3';

	static companyName(name: string): HTMLElement {
		var div = document.createElement('div');
		div.innerHTML = `<${Component.nameHeading}>${name}</${Component.nameHeading}>`;

		return div;
	}

	static companyAddress(address: Address): HTMLElement {
		var {zip, city, street, building } = address;
		var div = document.createElement('div');
		div.innerHTML = `
			<div>${street} ${building}</div>
			<div>${zip} ${city}</div>
		`;

		return div;
	}	
}
