import Component from 'inferno-component';

interface NavbarProps {
	title: string;
	iconLeft: ICONS;
	onClickIconLeft: () => {};
}

export enum ICONS {
	Arrow_Left = 'icon-arrow-back'
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