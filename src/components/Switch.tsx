import Component from 'inferno-component';
import {Props} from 'inferno';

export class Switch extends Component<Props, any> {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className="switch">
				<input type="checkbox"></input>
				<div className="bar">
					<div className="thumb"></div>
				</div>
			</div>
		);
	}
}