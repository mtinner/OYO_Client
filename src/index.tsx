import {render} from 'inferno';
import Component from 'inferno-component';
import './styles/oyo.scss';
import {List} from './components/List';
import {EndpointService} from './services/EndpointService';
import {ITwoLineListItemProps} from './components/TwoLineListItem';

const container = document.getElementById('app');

class MyComponent extends Component<any, any> {
	private endpointService: EndpointService;

	constructor(props, context) {
		super(props, context);

		this.state = {
			newItems: new Array<ITwoLineListItemProps>(),
			configuredItems: new Array<ITwoLineListItemProps>(),
			unusedItems: new Array<ITwoLineListItemProps>()
		};
	}

	componentDidMount() {
		let newItems = new Array<ITwoLineListItemProps>(),
			configuredItems = new Array<ITwoLineListItemProps>(),
			unusedItems = new Array<ITwoLineListItemProps>();
		this.endpointService = new EndpointService();
		this.endpointService.endpoints
			.then(endpoints => endpoints
				.forEach(endpoint => {
					endpoint.ios
						.forEach(io => {
							if (io.title) {
								configuredItems.push({
									title: io.title,
									description: `Node ${endpoint.chipId.toString()}, Pin ${io.inputPin}`
								});
							}
							else if (io.activated) {
								newItems.push({
									title: endpoint.chipId.toString(),
									description: `InputPin ${io.inputPin}`
								});
							}
							else {
								unusedItems.push({
									title: endpoint.chipId.toString(),
									description: `InputPin ${io.inputPin}`
								})
							}
						})
				})
			)
			.then(items => {
				this.setState({newItems, unusedItems, configuredItems})
			});
	}

	render() {
		return (
			<div>
				<List title="New" items={this.state.newItems}/>
				<List title="Configured" items={this.state.configuredItems}/>
				<List title="Unused" items={this.state.unusedItems}/>
			</div>
		);
	}
}

render(<MyComponent />, container);
