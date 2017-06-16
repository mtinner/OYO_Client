import Component from 'inferno-component';
import {ListItemProps} from './ListItem';

interface Props {
	title: string;
	items: ListItemProps[];
}

export class List extends Component<Props, any> {

	render() {
		if (!this.props.items.length) {
			return;
		}
		const items = this.props.items.map((item: ListItemProps) => {
			return <item.tagName {...item}></item.tagName>;
		});

		return (
			<div className="list">
				<header>{this.props.title}</header>
				<ul>{items}</ul>
			</div>
		);
	}
}
