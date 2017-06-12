import Component from 'inferno-component';
import {Inputfield} from '../components/Inputfield';

export class Configuration extends Component<any, any> {

	constructor(props, context) {
		super(props, context);
		this.state = {title: 'Küche'};
	}

	onInputfieldChange = (event) => {
		if (event && event.target) {
			this.setState({title: event.target.value});
		}
	};

	render() {
		return (
			<div>
				<Inputfield title="Name" text={this.state.title}
							onInputChange={this.onInputfieldChange}></Inputfield>
			</div>
		);
	}
}