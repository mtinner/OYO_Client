import {ListItem, ListItemProps} from './ListItem';
import {Switch} from './Switch';
import {Checkbox} from './Checkbox';

export abstract class ControlListItemProps extends ListItemProps {
	readonly tagName = ControlListItem;
	abstract readonly controlItem;
	checked: boolean;
	onChange = (value: any) => {
	};
}

export class SwitchControlListItemProps extends ControlListItemProps {
	readonly controlItem = Switch;
}

export class CheckControlListItemProps extends ControlListItemProps {
	readonly controlItem = Checkbox;
}

export class ControlListItem extends ListItem {

	render() {
		return (<li>
			<header>{this.props.title}</header>
			<this.props.controlItem
				{...this.props}
				onChange={(event) =>
					this.props.onChange(event.target.checked)
				}>
			</this.props.controlItem>
		</li>);
	}
}
