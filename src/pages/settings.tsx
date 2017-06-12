import Component from 'inferno-component';
import {EndpointService} from '../services/EndpointService';
import {TwoLineListItemProps} from '../components/TwoLineListItem';
import {List} from '../components/List';


export class Settings extends Component<any, any> {
	private endpointService = new EndpointService();

	constructor(props, context) {
		super(props, context);
		this.state = {
			newItems: new Array<TwoLineListItemProps>(),
			configuredItems: new Array<TwoLineListItemProps>(),
			unusedItems: new Array<TwoLineListItemProps>()
		};
	}

	componentDidMount() {
		let newItems = new Array<TwoLineListItemProps>(),
			configuredItems = new Array<TwoLineListItemProps>(),
			unusedItems = new Array<TwoLineListItemProps>();
		this.endpointService.endpoints
			.then(endpoints => endpoints
				.forEach(endpoint => {
						endpoint.ios
							.forEach(io => {
								let two = new TwoLineListItemProps();
								if (io.title) {
									two.title = io.title;
									two.description = `Node ${endpoint.chipId.toString()}, Pin ${io.inputPin}`;
									configuredItems.push(two);
								} else if (io.activated) {
									two.title = endpoint.chipId.toString();
									two.description = `InputPin ${io.inputPin}`;
									newItems.push(two);
								} else {
									two.title = endpoint.chipId.toString();
									two.description = `InputPin ${io.inputPin}`;
									unusedItems.push(two);
								}
							});
					}
				)
			)
			.then(items => {
					this
						.setState({newItems, unusedItems, configuredItems});
				}
			)
		;
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
