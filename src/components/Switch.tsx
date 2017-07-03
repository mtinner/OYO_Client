import Component from 'inferno-component';
import { Props } from 'inferno';

export class Switch extends Component<Props, any> {

	change(event) {
		this.props.onToggle && this.props.onToggle(!this.props.checked);
	}

	render() {
		return (
			<div className="switch">
				<input onChange={(event) => this.change(event)} type="checkbox" checked={this.props.checked}></input>
				<div className="bar">
					<div className="thumb"></div>
				</div>
			</div>
		);
	}
}