import Component from 'inferno-component';
import {Props} from 'inferno';

export class Checkbox extends Component<Props, any> {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		return <input type="checkbox" onChange={this.props.onChange} checked={this.props.checked}></input>;
	}
}