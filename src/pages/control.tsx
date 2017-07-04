import Component from 'inferno-component';
import {List} from '../components/List';

export class Control extends Component<any, any> {

	render() {
		return (
			<div>
				<List title="" items={this.state.controlList}/>
			</div>
		);
	}
}
