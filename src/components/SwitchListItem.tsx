import {ListItem, ListItemProps} from './ListItem';
import {Switch} from './Switch';

interface ControlListItemProps extends ListItemProps {
	checked: boolean;
	onChange: (value: any) => {}
	;
}

export class SwitchListItem extends ListItem<ControlListItemProps> {

	render() {
		return (<li>
			<header>{this.props.title}</header>
			<Switch
				checked={this.props.checked}
				onToggle={(event) =>
					this.props.onChange(event)
				}>
			</Switch>
		</li>);
	}
}
