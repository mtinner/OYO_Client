import Inferno from 'inferno';
import {IndexRoute, Route, Router} from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './styles/oyo.scss';
import {Settings} from './pages/settings';
import {Configuration} from './pages/configuration';

const browserHistory = createBrowserHistory();

function NoMatch() {
	return <div>I am a no Match component</div>;
}/*
function User({params}) {
	return <div>{ JSON.stringify(params) }</div>;
}*/

const routes = (
	<Router history={ browserHistory }>
		<IndexRoute component={ Settings }/>
		<Route path="configuration" component={ Settings }/>
		<Route path="/configuration/:chipid/:pin" component={ Configuration }/>
		<Route path="*" component={ NoMatch }/>
	</Router>
);

Inferno.render(routes, document.getElementById('app'));
