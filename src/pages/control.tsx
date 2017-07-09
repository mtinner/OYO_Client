import Component from 'inferno-component';
import {ICONS, Navbar} from '../components/Navbar';
import {EndpointService} from '../services/EndpointService';
import {IIO, ioSort} from '../common/IIO';
import {List} from '../components/List';
import {SwitchListItem} from '../components/SwitchListItem';

export class Control extends Component<any, any> {

	private endpointService = new EndpointService();

	componentWillMount() {
		this.setState({title: ''});
		this.endpointService.getEndpoints({status: 1, activated: true})
			.then((ios: [IIO]) => {
				this.setState({ios});
			});
	}

	renderListItems() {
		if (!this.state.ios || !this.state.ios.length) {
			return [];
		} else {
			return this.state.ios
				.sort(ioSort)
				.map(io => <SwitchListItem title={io.title || `Node ${io.chipId.toString()}`}
										   checked={io.inputLevel === 1}
										   onChange={(value) => this.switchOutput(io.id, value)}/>);
		}
	}

	switchOutput(id: string, value) {

	}

	render() {
		return (
			<div>
				<Navbar iconLeft={ICONS.Menu}
						title="Control"></Navbar>
				<List items={this.renderListItems()}/>
			</div>
		);
	}
}
