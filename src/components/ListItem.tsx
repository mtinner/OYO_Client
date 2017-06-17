import Component from 'inferno-component';
import {Props} from 'inferno';
import {Link} from 'inferno-router';

export abstract class ListItemProps {
	abstract readonly tagName: typeof ListItem;
	title: string;
	onClick = (props: ListItemProps) => {
	};
	route?: string;
}

export abstract class ListItem extends Component<Props, any> {

	render(content) {
		return <li href={this.props.route} onClick={() => {
			this.props.onClick(this.props);
			this.props.route && (window.location.href = this.props.route);
		}}>
			{content}
			<Link to={this.props.router}/>
		</li>;
	}
}