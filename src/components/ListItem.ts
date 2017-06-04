import Component from 'inferno-component';
import {Props} from 'inferno';
export abstract class ListItemProps {
	abstract readonly tagName: typeof ListItem;
	title: string;
}

export class ListItem extends Component<Props, any> {

	constructor(props, context) {
		super(props, context);
	}
}