import {ListItem, ListItemProps} from './ListItem';
import {Switch} from './Switch';
import {Checkbox} from './Checkbox';

abstract class ControlListItemProps extends ListItemProps {
	abstract readonly controlItem;
}

export class SwitchControlListItemProps extends ControlListItemProps {
	readonly tagName = ControlListItem;
	readonly state;
	readonly controlItem = Switch;
}

export class CheckControlListItemProps extends ControlListItemProps {
	readonly tagName = ControlListItem;
	readonly state;
	readonly controlItem = Checkbox;
}

export class ControlListItem extends ListItem {
	render() {
		return (<li>
			<header>{this.props.content.title}</header>
			<this.props.content.controlItem></this.props.content.controlItem>
		</li>);
	}
}
