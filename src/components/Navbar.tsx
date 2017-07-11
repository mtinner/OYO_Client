import Component from 'inferno-component';
import { ICONS } from '../common/constants';

interface NavbarProps {
	title: string;
	iconLeft: ICONS;
	onClickIconLeft: () => {};
}

export class Navbar extends Component<NavbarProps, any> {

	onLeftIconClick = () => {
		this.props.onClickIconLeft && this.props.onClickIconLeft();
	}

	render() {
		return (
			<header className="navbar">
				<i className={this.props.iconLeft} onClick={this.onLeftIconClick}></i>
				<span className="title">{this.props.title}</span>
			</header>
		);
	}
}