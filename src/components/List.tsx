import Component from 'inferno-component';
import {TwoLineListItem} from './TwoLineListItem';

interface Props {
	title: string;
	items: Array<any>;
}

export class List extends Component<Props, any> {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		const items = this.props.items.map(item => {
			return <TwoLineListItem item={item}></TwoLineListItem>;
		});

		return (
			<div className="list">
				<header>{this.props.title}</header>
				<ul>{items}</ul>
			</div>
		);
	}
}