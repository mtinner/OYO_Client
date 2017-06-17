import Component from 'inferno-component';
import {Inputfield} from '../components/Inputfield';
import {List} from '../components/List';
import {ListItemProps} from '../components/ListItem';
import {SwitchControlListItemProps} from '../components/ControlListItem';
import {TwoLineListItemProps} from '../components/TwoLineListItem';
import {EndpointService} from '../services/EndpointService';
import {Endpoint} from '../common/IEndpoint';

export class Configuration extends Component<any, any> {
	private endpointService = new EndpointService();

	constructor(props, context) {
		super(props, context);
		this.state = {
			title: 'Unnamed',
			listItems: new Array<ListItemProps>()
		};
	}

	componentWillMount() {
		this.endpointService.getEndpoint(this.props.params.chipid)
			.then((endpoint: Endpoint) => {
				let io = endpoint.ios.find(tuple => tuple.inputPin === parseInt(this.props.params.inputpin, 0));
				if (!io) {
					return;
				}
				let switchItem = new SwitchControlListItemProps();
				switchItem.title = 'Toggle Output';
				switchItem.checked = io.toggleOutput;
				switchItem.onChange = (value) => {
					this.updateEnpoint({toggleOutput: value});
				};
				let activatedItem = new SwitchControlListItemProps();
				activatedItem.title = 'Activated';
				activatedItem.checked = io.activated;
				activatedItem.onChange = (value) => {
					this.updateEnpoint({activated: value});
				};
				let chipIdItem = new TwoLineListItemProps();
				chipIdItem.title = 'ChipId';
				chipIdItem.description = endpoint.chipId;
				let inputpinItem = new TwoLineListItemProps();
				inputpinItem.title = 'Inputpin';
				inputpinItem.description = io.inputPin;
				let listItems = [switchItem, activatedItem, chipIdItem, inputpinItem];

				this.setState({listItems, title: io.title || 'Unnamed', endpoint});
			});

		let switchItem = new SwitchControlListItemProps();
		switchItem.title = 'Toggle Output';
		let activatedItem = new SwitchControlListItemProps();
		activatedItem.title = 'Activated';
		let chipIdItem = new TwoLineListItemProps();
		chipIdItem.title = 'ChipId';
		chipIdItem.description = 'unknown';
		let inputpinItem = new TwoLineListItemProps();
		inputpinItem.title = 'Inputpin';
		inputpinItem.description = 'unknown';
		let listItems = [switchItem, activatedItem, chipIdItem, inputpinItem];

		this.setState({listItems});
	}

	onInputfieldChange = (event) => {
		if (event && event.target) {
			this.updateEnpoint({title: event.target.value});
		}
	};

	updateEnpoint(newObjectValues) {
		this.state.endpoint.ios = Endpoint.updateIO(this.state.endpoint, parseInt(this.props.params.inputpin, 0), newObjectValues);
		this.endpointService.updateEndpoint(this.state.endpoint);
		// this.setState({title: event.target.value});
	}

	render() {
		return (

			<div className="configuration">
				<div className="list-imitate">
					<Inputfield className="inputfield--list" title="Name" text={this.state.title}
								onInputChange={this.onInputfieldChange}></Inputfield>
				</div>
				<List title="" items={this.state.listItems}/>
			</div>
		);
	}
}