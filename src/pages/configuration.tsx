import Component from 'inferno-component';
import {Inputfield} from '../components/Inputfield';

export class Configuration extends Component<any, any> {

	constructor(props, context) {
		super(props, context);
	}

	onInputfieldChange = (event) => {
		console.log('chagne', event);
	};

	render() {
		return (
			<div>
				<Inputfield title="Name" text="Küche"
							onInputChange={this.onInputfieldChange}></Inputfield>
			</div>
		)
			;
	}
}