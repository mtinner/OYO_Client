import Component from 'inferno-component';

export interface ListItemProps {
	title: string;
}

export class ListItem<T extends ListItemProps> extends Component<T, any> {
}