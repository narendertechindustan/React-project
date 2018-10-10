import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import AppRoutes from './routes';
// main app
import App from './containers/App';

ReactDOM.render(
  		<AppRoutes/>,
 	document.getElementById("app")
)
