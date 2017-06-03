import {IListItemProps} from './List';
export interface ITwoLineListItemProps extends IListItemProps {
	description: string;
}

export function TwoLineListItem(props: ITwoLineListItemProps) {
	return <li>
		<header>{props.title}</header>
		<small>{props.description}</small>
	</li>;
}