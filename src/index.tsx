import {render, version} from 'inferno';
import Component from 'inferno-component';
import  './styles/oyo.scss';
import {List} from './components/List';

const container = document.getElementById('app');

class MyComponent extends Component<any, any> {
    private tsxVersion: number;

    constructor(props, context) {
        super(props, context);
        this.tsxVersion = 2.15;
    }

    render() {
        return (
            <div>
                <h1>{`Welcome to Inferno ${version} TSX ${this.tsxVersion}`}</h1>
                <List title={'Crazy list'} items={[1, 2, 34, 23]}/>
            </div>
        );
    }
}

render(<MyComponent />, container);