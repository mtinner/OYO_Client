import Component from 'inferno-component';

export class Inputfield extends Component<any, any> {

	componentWillMount() {
		this.focused = false;
	}

	set focused(value: boolean) {
		this.setState({focused: value});
	}

	text = (event) => {
		this.setState({text: event.target.value});
	};

	render() {
		return (
			<div className={'inputfield ' + (this.state.focused || !!this.props.text ? 'inputfield--focus' : '') }>
				<input type="text"
					   onBlur={() => this.focused = false }
					   onFocus={() => this.focused = true }
					   value={this.props.text}
					   onChange={this.props.onInputChange }>
				</input>
				<div className="subline"></div>

				<label>{this.props.title || ''}</label>
				{this.state.text}
			</div>
		);
	}
}