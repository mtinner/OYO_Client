import Component from 'inferno-component';
import {EndpointService} from '../services/EndpointService';
import {TwoLineListItemProps} from '../components/TwoLineListItem';
import {ListItemProps} from '../components/ListItem';
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
		this.endpointService.getEndpoints()
			.then(endpoints => endpoints
							.forEach(io => {
								let two = new TwoLineListItemProps();
								two.onClick = (props: ListItemProps) => {
									window.location.href = `/configuration/${io.id}`;
								};
								if (io.activated && io.title) {
									two.title = io.title;
									two.description = `Node ${io.chipId.toString()}, Pin ${io.inputPin}`;
									configuredItems.push(two);
								} else if (io.activated) {
									two.title = io.chipId.toString();
									two.description = `InputPin ${io.inputPin}`;
									newItems.push(two);
								} else {
									two.title = io.title || io.chipId.toString();
									two.description = `InputPin ${io.inputPin}`;
									unusedItems.push(two);
								}
							})
			)
			.then(items => {
					this.setState({ newItems, unusedItems, configuredItems });
				}
			);
	}

	render() {
		return (
			<div>
				<List title="New" items={this.state.newItems}/>
				<List title="Activated" items={this.state.configuredItems}/>
				<List title="Unused" items={this.state.unusedItems}/>
			</div>
		);
	}
}
