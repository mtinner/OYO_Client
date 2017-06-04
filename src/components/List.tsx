import Component from 'inferno-component';
import {ListItemProps} from './ListItem';

interface Props {
	title: string;
	items: Array<ListItemProps>;
}

export class List extends Component<Props, any> {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		const items = this.props.items.map((item: ListItemProps) => {
			return <item.tagName content={item}></item.tagName>;
		});


		return (
			<div className="list">
				<header>{this.props.title}</header>
				<ul>{items}</ul>
			</div>
		);
	}
}
