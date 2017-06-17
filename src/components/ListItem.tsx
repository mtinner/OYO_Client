import Component from 'inferno-component';
import {Props} from 'inferno';
import {Link} from 'inferno-router';

export abstract class ListItemProps {
	abstract readonly tagName: typeof ListItem;
	title: string;
	onClick = (props: ListItemProps) => {
	};
}

export abstract class ListItem extends Component<Props, any> {

	render(content) {
		return <li onClick={() => {
			this.props.onClick(this.props);
		}}>
			{content}
			<Link to={this.props.router}/>
		</li>;
	}
}