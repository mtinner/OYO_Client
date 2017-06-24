import Component from 'inferno-component';
import {EndpointService} from '../services/EndpointService';
import {List} from '../components/List';
import {ControlListItemProps, SwitchControlListItemProps} from '../components/ControlListItem';

export class Control extends Component<any, any> {
	private endpointService = new EndpointService();

	constructor(props, context) {
		super(props, context);
		this.state = {controlList: new Array<ControlListItemProps>()};
	}

	componentWillMount() {
		let controlList = new Array<ControlListItemProps>();
		this.endpointService.getEndpoints({activated: true})
			.then(ios => ios
				.forEach(io => {
						let switchItem = new SwitchControlListItemProps();
						switchItem.title = io.title;
						switchItem.checked = io.toggleOutput;
						switchItem.onChange = (value) => {
							this.updateEnpoint({toggleOutput: value});
						};
						controlList.push(switchItem);
					}
				)
			)
			.then(items => {
					this.setState({controlList});
				}
			)
		;
	}

	updateEnpoint(newObjectValues) {
		/* this.state.io = {...this.state.io, ...newObjectValues};
		 this.endpointService.updateEndpoint(this.state.io)
		 .then((io: IIO) => {
		 // merge old with new object
		 // this.updateView(io);
		 });
		 */
		console.log('update');
	}

	render() {
		return (
			<div>
				<List title="" items={this.state.controlList}/>
			</div>
		);
	}
}
