import Component from 'inferno-component';
import {Inputfield} from '../components/Inputfield';
import {List} from '../components/List';
import {ListItemProps} from '../components/ListItem';
import {CheckControlListItemProps, SwitchControlListItemProps} from '../components/SwitchControlListItem';
import {TwoLineListItemProps} from '../components/TwoLineListItem';

export class Configuration extends Component<any, any> {

	constructor(props, context) {
		super(props, context);
		this.state = {
			title: 'Küche',
			listItems: new Array<ListItemProps>()
		};
	}

	componentWillMount() {
		let switchItem = new SwitchControlListItemProps();
		switchItem.title = 'Toggle input';
		let activatedItem = new CheckControlListItemProps();
		activatedItem.title = 'Activated';
		let chipIdItem = new TwoLineListItemProps();
		chipIdItem.title = 'ChipId';
		chipIdItem.description = 'id';
		let inputpinItem = new TwoLineListItemProps();
		inputpinItem.title = 'Inputpin';
		inputpinItem.description = 'pinid';
		let listItems = [switchItem, activatedItem, chipIdItem, inputpinItem];

		this.setState({listItems});
	}

	onInputfieldChange = (event) => {
		if (event && event.target) {
			this.setState({title: event.target.value});
		}
	};

	render() {
		return (

			<div>
				<div className="list-imitate">
					<Inputfield className="inputfield--list" title="Name" text={this.state.title}
								onInputChange={this.onInputfieldChange}></Inputfield>
				</div>
				<List items={this.state.listItems}/>
			</div>
		);
	}
}