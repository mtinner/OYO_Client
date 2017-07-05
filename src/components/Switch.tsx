export function Switch(props) {
	return (
		<div className="switch">
			<input
				onChange={() => {
					props.onToggle && props.onToggle(!props.checked);
				}}
				type="checkbox" checked={props.checked}>
			</input>
			<div className="bar">
				<div className="thumb"></div>
			</div>
		</div>
	);
}