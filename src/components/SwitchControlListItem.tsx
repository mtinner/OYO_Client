import {ListItem, ListItemProps} from './ListItem';

export class SwitchControlListItemProps extends ListItemProps {
	readonly tagName = ControlListItem;
}

export class CheckControlListItemProps extends ListItemProps {
	readonly tagName = ControlListItem;
}

export class ControlListItem extends ListItem {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return <li>
			<header>{this.props.content.title}</header>
		</li>;
	}
}
