import Component from 'inferno-component';
import {Props} from 'inferno';
import {Link} from 'inferno-router';

export abstract class ListItemProps {
	title: string;
	onClick = (props: ListItemProps) => {
	}
}

export class ListItem extends Component<Props, any> {

	render() {
		return <li onClick={() => {
			this.props.onClick && this.props.onClick(this.props);
		}}>
			{this.props.children}
			<Link to={this.props.router}/>
		</li>;
	}
}