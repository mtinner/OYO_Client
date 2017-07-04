import {ListItem, ListItemProps} from './ListItem';

export class TwoLineListItem extends ListItem<ListItemProps> {

	render() {
		return <li>
			<div>
				<header>{this.props.title}</header>
				<small>{this.props.description}</small>
			</div>
		</li>;
	}
}
