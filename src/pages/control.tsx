import Component from 'inferno-component';
import {ICONS, Navbar} from '../components/Navbar';

export class Control extends Component<any, any> {

	render() {
		return (
			<div>
				<Navbar iconLeft={ICONS.Menu}
						title="Control"></Navbar>
				<i class="icon-menu">
				</i>
			</div>
		);
	}
}
