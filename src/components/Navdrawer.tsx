import Component from 'inferno-component';
import {Navbar} from './Navbar';
import {IconListItem} from './IconListItem';
import {navigateToConfiguration, navigateToControl} from '../common/navigation';
import {ICONS} from '../common/constants';
import {List} from './List';
import {ListItem, ListItemProps} from './ListItem';
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

	renderListItems(): Array<ListItem<ListItemProps>> {
		return [
			<IconListItem icon={ICONS.Arrow_Left} title="Control" onClick={navigateToControl}/>,
			<IconListItem icon={ICONS.Menu} title="Settings" onClick={navigateToConfiguration}/>
		];
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
						<List items={this.renderListItems()}/>
					</div>
				</div>
			</div>
		);
	}
}
