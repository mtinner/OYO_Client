import Component from 'inferno-component';
import {TwoLineListItem, ITwoLineListItemProps} from './TwoLineListItem';

interface Props {
	title: string;
	items: Array<IListItemProps>;
}

export interface IListItemProps {
	title: string;
}

export class List extends Component<Props, any> {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		const items = this.props.items.map((item: ITwoLineListItemProps) => {
			return <TwoLineListItem title={item.title} description={item.description}></TwoLineListItem>;
		});


		return (
			<div className="list">
				<header>{this.props.title}</header>
				<ul>{items}</ul>
			</div>
		);
	}
}