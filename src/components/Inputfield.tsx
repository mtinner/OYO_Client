import Component from 'inferno-component';


export class Inputfield extends Component<any, any> {

	constructor(props, context) {
		super(props, context);
		this.state = {focused: !!this.props.text};
		this.props.onInputChange();
	}

	set focused(value: boolean) {
		this.setState({focused: value || !!this.props.text});
	}

	text = (event) => {
		this.setState({text: event.target.value});
	};

	render() {
		return (
			<div className={'inputfield ' + (this.state.focused ? 'inputfield--focus' : '') }>
				<input type="text"
					   onBlur={() => this.focused = false }
					   onFocus={() => this.focused = true }
					   value={this.props.text}
					   onChange={this.props.onInputChange }>
				</input>
				<div className="subline"></div>

				<label>{this.props.title}</label>
				{this.state.text}
			</div>
		);
	}
}