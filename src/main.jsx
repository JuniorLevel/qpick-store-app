import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './assets/index.css';
import AppRouter from './components/AppRouter';
import { store } from './store/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
