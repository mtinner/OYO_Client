import Component from 'inferno-component';
// import {ListItem} from './ListItem';

interface Props {
	title: string;
	items: Component<any, any>[];
}

export class List extends Component<Props, any> {

	render() {
		const items = this.props.items.map((item: Component<any, any>) => { 
      return <li>{item}</li>; 
    }); 

		return (
			<div className="list">
				<header>{this.props.title}</header>
				<ul>{items}</ul>
			</div>
		);
	}
}
