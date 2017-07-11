import Component from 'inferno-component';
import { ICONS, Navbar } from './Navbar';
interface NavdrawerProps {
	title: string;
}

export class Navdrawer extends Component<NavdrawerProps, any> {

	componentWillMount() {
		this.setState({});
	}

	toggleNavdrawer() {
		if (this.state.showNavdrawer) {
			this.setShowNavdrawer(false);
		} else {
			this.setShowNavdrawer(true);
		}
	}

	setShowNavdrawer(value) {
		this.setState({
			...this.state,
			showNavdrawer: value
		});
	}

	render() {
		return (
			<div>
				<Navbar iconLeft={ICONS.Menu}
				        onClickIconLeft={() => this.toggleNavdrawer()}
				        title={this.props.title}></Navbar>
				<div className={'navdrawer ' + (this.state.showNavdrawer ? 'show' : '') }>
					<div className="backdrop" onClick={() => this.setShowNavdrawer(!this.state.showNavdrawer)}></div>
					<div className="drawer">
						<header>

						</header>
						<main></main>
					</div>
				</div>
			</div>
		);
	}
}
