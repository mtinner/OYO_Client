import {ListItem, ListItemProps} from './ListItem';

export class TwoLineListItemProps extends ListItemProps {
	readonly tagName = TwoLineListItem;
	public description: string | number;
}

export class TwoLineListItem extends ListItem {

	render() {
		return super.render(
			<div>
				<header>{this.props.title}</header>
				<small>{this.props.description}</small>
			</div>
		);
	}
}
