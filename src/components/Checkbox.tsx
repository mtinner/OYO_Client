import Component from 'inferno-component';
import {Props} from 'inferno';

export class Checkbox extends Component<Props, any> {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		return <input type="checkbox" checked={this.props.checked}></input>;
	}
}