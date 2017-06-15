import Component from 'inferno-component';
import {Props} from 'inferno';

export class Switch extends Component<Props, any> {

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