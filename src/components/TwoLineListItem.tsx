import {ListItem, ListItemProps} from './ListItem';


interface TwoLineListItemProps extends ListItemProps {
	onClick: (value: any) => {};
}

export class TwoLineListItem extends ListItem<TwoLineListItemProps> {

	render() {
		return <li onClick={() => {
			this.props.onClick && this.props.onClick(event);
		}}>
			<div>
				<header>{this.props.title}</header>
				<small>{this.props.description}</small>
			</div>
		</li>;
	}
}
