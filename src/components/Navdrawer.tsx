interface NavdrawerProps {
	isShown: boolean;
	onClickBackdrop: (value) => void;
}

export function Navdrawer(props: NavdrawerProps) {
	function onBackdropClick(value: boolean) {
		props.onClickBackdrop && props.onClickBackdrop(value);
	}

	return (
		<div className={'navdrawer ' + (props.isShown ? 'show' : '') }>
			<div className="backdrop" onClick={() => onBackdropClick(!props.isShown)}></div>
			<div className="drawer">
				<header>

				</header>
				<main></main>
			</div>
		</div>
	);
}

export function toggleNavdrawer(instance) {
	if (instance.state.showNavdrawer) {
		instance.setState({ ...instance.state, showNavdrawer: false });
	} else {
		instance.setState({ ...instance.state, showNavdrawer: true });
	}
}

function updateStateForBackdrop(instance, value) {
	instance.setState({
		...instance.state,
		showNavdrawer: value
	});
}

export function defaultProps(instance) {
	return {
		isShown: instance.state.showNavdrawer,
		onClickBackdrop: (value) => updateStateForBackdrop(instance, value)
	};
}
