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
			title: 'Unnamed'
		};
	}

	componentWillMount() {
		this.endpointService.getEndpoints({ id: this.props.params.id })
			.then((ios: [IIO]) => {
				this.setState(ios[0]);
			});
	}

	onInputfieldChange = (event) => {
		if (event && event.target) {
			this.setState(
				{ ...this.state, title: event.target.value },
				() => this.endpointService.updateEndpoint(this.state)
					.then((io: IIO) => {
						this.setState(io);
					})
			);
		}
	}

	updateIo(update) {
		this.endpointService.updateEndpoint({ ...this.state, ...update })
			.then((io: IIO) => {
				this.setState(io);
			});
	}

	renderListItems(): ListItem[] {
		if (!this.state) {
			return [];
		}

		const onChangeSwitch = (value) => {
			this.updateIo({ toggleOutput: value });
		};
		let switchItem = <ListItem title="Toggle Output">
			<Switch checked={this.state.toggleOutput} onToggle={onChangeSwitch} />
		</ListItem>;

		const onChangeSwitchTwo = (value) => {
			this.updateIo({ activated: value });
		};
		let activatedItem = <ListItem title="Activated">
			<Switch checked={this.state.activated} onToggle={onChangeSwitchTwo} />
		</ListItem>;

		let chipIdItem = <TwoLineListItem title="ChipId" description={this.state.chipId} />;

		let inputpinItem = <TwoLineListItem title="Inputpin" description={this.state.inputPin} />;

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