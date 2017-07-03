import Component from 'inferno-component';
import { Inputfield } from '../components/Inputfield';
import { List } from '../components/List';
import { TwoLineListItem } from '../components/TwoLineListItem';
import { EndpointService } from '../services/EndpointService';
import { IIO } from '../common/IIO';
import { Switch } from '../components/Switch';
import { ListItem } from '../components/ListItem';

export class Configuration extends Component<any, any> {
	private endpointService = new EndpointService();

	constructor(props, context) {
		super(props, context);
		this.state = {
			title: 'Unnamed',
			io: []
		};
	}

	componentWillMount() {
		this.endpointService.getEndpoints({ id: this.props.params.id })
			.then((ios: [IIO]) => {
				this.setState({ ...this.state, io: ios[0], title: ios[0].title });
			});
	}

	onInputfieldChange = (event) => {
		if (event && event.target) {
			this.setState({ ...this.state, title: event.target.value });
		}
	}

	updateEnpoint(newObjectValues) {
		this.endpointService.updateEndpoint({ ...this.state.io, ...newObjectValues })
			.then((io: IIO) => {
				this.setState({ ...this.state, io });
			});
	}

	renderListItems(io = this.state.io): ListItem[] {
		if (!io) {
			return [];
		}

		const onChangeSwitch = (value) => {
			this.updateEnpoint({ toggleOutput: value });
		};
		let switchItem = <ListItem><Switch checked={io.toggleOutput} onToggle={onChangeSwitch} /></ListItem>;
		switchItem.title = 'Toggle Output';

		const onChangeSwitchTwo = (value) => {
			this.updateEnpoint({ activated: value });
		};

		let activatedItem = <ListItem><Switch checked={io.activated} onToggle={onChangeSwitchTwo} /></ListItem>;
		activatedItem.title = 'Activated';

		let chipIdItem = <ListItem><TwoLineListItem title="ChipId" description={io.chipId} /></ListItem>;

		let inputpinItem = <ListItem><TwoLineListItem title="Inputpin" description={io.inputPin} /></ListItem>;

		return [switchItem, activatedItem, chipIdItem, inputpinItem];
	}

	render() {
		return (

			<div className="configuration">
				<div className="list-imitate">
					<Inputfield
						className="inputfield--list"
						title="Name" text={this.state.title}
						onInputChange={this.onInputfieldChange}
					></Inputfield>
				</div>
				<List title={this.state.title} items={this.renderListItems()} />
			</div>
		);
	}
}