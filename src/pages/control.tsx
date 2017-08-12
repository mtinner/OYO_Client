import Component from 'inferno-component';
import {EndpointService} from '../services/EndpointService';
import {IIO, ioSort} from '../common/IIO';
import {List} from '../components/List';
import {SwitchListItem} from '../components/SwitchListItem';
import {constants} from '../common/constants';
import {Navdrawer} from '../components/Navdrawer';

export class Control extends Component<any, any> {

	private endpointService = new EndpointService();
	private ws: WebSocket;

	componentWillMount() {
		this.setState({title: ''});
		// TODO activated and up
		this.endpointService.getEndpoints({activated: true})
			.then((ios: [IIO]) => {
				this.setState({ios});
			});
		const wsEndpoint = `ws://${window.location.host}/ws`;
		this.ws = new WebSocket(wsEndpoint);
		this.ws.addEventListener('message', (event) => {
			this.updateListEntry(JSON.parse(event.data) as IIO);
		});
	}

	componentWillUnmount() {
		this.ws.close();
	}

	renderListItems() {
		if (!this.state.ios || !this.state.ios.length) {
			return [];
		} else {
			return this.state.ios
				.sort(ioSort)
				.map(io => <SwitchListItem key={io.id}
										   title={io.title || `Node ${io.chipId.toString()}`}
										   checked={io.outputLevel === constants.LEVEL.UP}
										   onChange={(value) => this.switchOutput(io.id, value)}/>);
		}
	}

	updateListEntry(updatedIO: IIO) {
		let ios = [...this.state.ios.filter(io => io.id !== updatedIO.id), updatedIO];
		this.setState({...this.state, ios});
	}

	switchOutput(id: string, value) {
		// TODO change output instead of inputLevel
		this.endpointService.switchEndpoint({id});
	}

	render() {
		return (
			<div>
				<Navdrawer title="Control"></Navdrawer>
				<List items={this.renderListItems()}/>
			</div>
		)
			;
	}
}
