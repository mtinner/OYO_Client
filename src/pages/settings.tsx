import Component from 'inferno-component';
import {List} from '../components/List';
import {EndpointService} from '../services/EndpointService';
import {TwoLineListItem} from '../components/TwoLineListItem';
import {ICONS, Navbar} from '../components/Navbar';

export class Settings extends Component<any, any> {
	private endpointService = new EndpointService();

	componentWillMount() {
		this.setState({endpoints: []}, () =>
			this.endpointService.getEndpoints()
				.then((endpoints) => this.setState({endpoints})));
	}

	onClick = (id) => {
		return () => {
			window.location.href = `/configuration/${id}`;
		};
	}

	renderNewListItems() {
		if (!this.state.endpoints.length) {
			return [];
		} else {
			return this.state.endpoints.filter(io => io.activated && !io.title)
				.map(io => <TwoLineListItem title={`Node ${io.chipId.toString()}`}
											description={`InputPin ${io.inputPin}`}
											onClick={this.onClick(io.id)}/>);
		}
	}

	renderActivatedListItems() {
		if (!this.state.endpoints.length) {
			return [];
		} else {
			return this.state.endpoints.filter(io => io.activated && io.title)
				.map(io => <TwoLineListItem title={io.title}
											description={`Node ${io.chipId.toString()}, Pin ${io.inputPin}`}
											onClick={this.onClick(io.id)}/>);
		}
	}

	renderUnusedListItems() {
		if (!this.state.endpoints.length) {
			return [];
		} else {
			return this.state.endpoints.filter(io => !io.activated)
				.map(io => <TwoLineListItem title={io.title || `Node ${io.chipId.toString()}`}
											description={`InputPin ${io.inputPin}`}
											onClick={this.onClick(io.id)}/>);
		}
	}

	render() {
		return (
			<div>
				<Navbar iconLeft={ICONS.Menu}
						title="Settings"></Navbar>
				<List title="New" items={this.renderNewListItems()}/>
				<List title="Activated" items={this.renderActivatedListItems()}/>
				<List title="Unused" items={this.renderUnusedListItems()}/>
			</div>
		);
	}
}
