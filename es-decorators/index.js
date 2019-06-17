import { component, directive } from './decorators';
import Framework from './Framework';


@component('data-list')
class DataListComponent {}

@component('list-item')
class ListItemComponent {}


@directive('when')
class WhenDirective {}

@directive('forEach')
class ForEachDirective {}


var { components, directives } = Framework.parts;
var output = document.getElementById('output');

output.innerHTML = `
	<div>
		Registered components:
		<ul>
			${Object.keys(components).map(name => '<li>' + name + '</li>').join('')}
		</ul>
	</div>
	<div>
		Registered directives:
		<ul>
			${Object.keys(directives).map(name => '<li>' + name + '</li>').join('')}
		</ul>
	</div>
`;
