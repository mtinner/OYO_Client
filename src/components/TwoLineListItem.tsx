import Component from 'inferno-component';
import { ListItemProps } from './ListItem';

export class TwoLineListItemProps extends ListItemProps {
	readonly tagName = TwoLineListItem;
	public description: string | number;
}

export class TwoLineListItem extends Component<any, any> {

	render() {
		return <li>
			<div>
				<header>{this.props.title}</header>
				<small>{this.props.description}</small>
			</div>
		</li>;
	}
}
