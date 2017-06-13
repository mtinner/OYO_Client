import {ListItem, ListItemProps} from './ListItem';
import {Switch} from './Switch';
import {Checkbox} from './Checkbox';

export class SwitchControlListItemProps extends ListItemProps {
	readonly tagName = ControlListItem;
	readonly state;
}

export class CheckControlListItemProps extends ListItemProps {
	readonly tagName = ControlListItem;
	readonly state;
}

export class ControlListItem extends ListItem {
	constructor(props, context) {
		super(props, context);
		if (props.content.constructor.name === SwitchControlListItemProps.name) {

		}
	}


	render() {
		let controlElement = '';
		switch (this.props.content.constructor.name) {
			case CheckControlListItemProps.name: {
				controlElement = <Checkbox></Checkbox>;
				break;
			}
			case SwitchControlListItemProps.name: {
				controlElement = <Switch></Switch>;
				break;
			}
		}

		return (<li>
			<header>{this.props.content.title}</header>
			{controlElement}
		</li>);
	}
}
