import Component from 'inferno-component';
import {Inputfield} from '../components/Inputfield';
import {List} from '../components/List';
import {ListItemProps} from '../components/ListItem';
import {CheckControlListItemProps, SwitchControlListItemProps} from '../components/ControlListItem';
import {TwoLineListItemProps} from '../components/TwoLineListItem';
import {EndpointService} from '../services/EndpointService';
import {IEndpoint} from '../common/IEndpoint';

export class Configuration extends Component<any, any> {
	private endpointService = new EndpointService();

	constructor(props, context) {
		super(props, context);
		this.state = {
			title: 'Küche',
			listItems: new Array<ListItemProps>()
		};
	}

	componentWillMount() {
		this.endpointService.getEndpoint(this.props.params.chipid)
			.then((endpoint: IEndpoint) => {
				let io = endpoint.ios.find(tuple => tuple.inputPin === parseInt(this.props.params.inputpin, 0));
				if (!io) {
					return;
				}
				let switchItem = new SwitchControlListItemProps();
				switchItem.title = 'Toggle input';
				let activatedItem = new CheckControlListItemProps();
				activatedItem.title = 'Activated';
				let chipIdItem = new TwoLineListItemProps();
				chipIdItem.title = 'ChipId';
				chipIdItem.description = endpoint.chipId;
				let inputpinItem = new TwoLineListItemProps();
				inputpinItem.title = 'Inputpin';
				inputpinItem.description = io.inputPin;
				let listItems = [switchItem, activatedItem, chipIdItem, inputpinItem];

				this.setState({listItems});
			});

		let switchItem = new SwitchControlListItemProps();
		switchItem.title = 'Toggle input';
		let activatedItem = new CheckControlListItemProps();
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
			this.setState({title: event.target.value});
		}
	};

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