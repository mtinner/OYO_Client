import {ListItem, ListItemProps} from './ListItem';

export class TwoLineListItemProps extends ListItemProps {
	readonly tagName = TwoLineListItem;
	public description: string;
}

export class TwoLineListItem extends ListItem {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return <li>
			<header>{this.props.content.title}</header>
			<small>{this.props.content.description}</small>
		</li>;
	}
}
