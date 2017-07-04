import Component from 'inferno-component';
import {List} from '../components/List';
import {EndpointService} from '../services/EndpointService';
import {TwoLineListItem} from '../components/TwoLineListItem';

export class Settings extends Component<any, any> {
	private endpointService = new EndpointService();

	componentWillMount() {
		this.setState({endpoints: []}, () =>
			this.endpointService.getEndpoints()
				.then((endpoints) => this.setState({endpoints})));
	}

	renderNewListItems() {
		if (!this.state.endpoints.length) {
			return [];
		} else {
			return this.state.endpoints.filter(io => io.activated && !io.title)
				.map(io => <TwoLineListItem title={`Node ${io.chipId.toString()}`}
											description={`InputPin ${io.inputPin}`}/>);
		}
	}

	renderActivatedListItems() {
		if (!this.state.endpoints.length) {
			return [];
		} else {
			return this.state.endpoints.filter(io => io.activated && io.title)
				.map(io => <TwoLineListItem title={io.title}
											description={`Node ${io.chipId.toString()}, Pin ${io.inputPin}`}/>);
		}
	}

	renderUnusedListItems() {
		if (!this.state.endpoints.length) {
			return [];
		} else {
			return this.state.endpoints.filter(io => !io.activated)
				.map(io => <TwoLineListItem title={io.title || `Node ${io.chipId.toString()}`}
											description={`InputPin ${io.inputPin}`}/>);
		}
	}

	render() {
		return (
			<div>
				<List title="New" items={this.renderNewListItems()}/>
				<List title="Activated" items={this.renderActivatedListItems()}/>
				<List title="Unused" items={this.renderUnusedListItems()}/>
			</div>
		);
	}
}
