import {ListItem, ListItemProps} from './ListItem';
import {ICONS} from '../common/constants';

interface IconListItemProps extends ListItemProps {
	onClick: (value: any) => {};
	icon: ICONS;
}

export class IconListItem extends ListItem<IconListItemProps> {

	render() {
		return <li onClick={() => {
			this.props.onClick && this.props.onClick(event);
		}}>
			<i className={this.props.icon}></i>
			<span>{this.props.title}</span>
		</li>;
	}
}
