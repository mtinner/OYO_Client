import Component from 'inferno-component';
import {Inputfield} from '../components/Inputfield';
import {List} from '../components/List';
import {TwoLineListItem} from '../components/TwoLineListItem';
import {EndpointService} from '../services/EndpointService';
import {IIO} from '../common/IIO';
import {ListItem, ListItemProps} from '../components/ListItem';
import {SwitchListItem} from '../components/SwitchListItem';

export class Configuration extends Component<any, any> {
	private endpointService = new EndpointService();

	componentWillMount() {
		this.setState({title: 'Unnamed'});
		this.endpointService.getEndpoints({id: this.props.params.id})
			.then((ios: [IIO]) => {
				this.setState(ios[0]);
			});
	}

	onInputfieldChange = (event) => {
		if (event && event.target) {
			this.setState(
				{...this.state, title: event.target.value},
				() => this.endpointService.updateEndpoint(this.state)
					.then((io: IIO) => {
						this.setState(io);
					})
			);
		}
	}

	updateIo(update) {
		this.endpointService.updateEndpoint({...this.state, ...update})
			.then((io: IIO) => {
				this.setState(io);
			});
	}

	renderListItems(): Array<ListItem<ListItemProps>> {
		if (!this.state) {
			return [];
		}

		let switchItem = <SwitchListItem title="Toggle Output" checked={this.state.toggleOutput}
										 onChange={value => this.updateIo({toggleOutput: value})}>
		</SwitchListItem>;

		let activatedItem = <SwitchListItem title="Activated" checked={this.state.activated}
											onChange={value => this.updateIo({activated: value})}>
		</SwitchListItem>;

		let chipIdItem = <TwoLineListItem title="ChipId" description={this.state.chipId}/>;

		let inputpinItem = <TwoLineListItem title="Inputpin" description={this.state.inputPin}/>;

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
				<List items={this.renderListItems()}/>
			</div>
		);
	}
}