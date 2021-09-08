import './styles/index.css';

import { render } from 'preact';

import { App } from './App';

const app = document.getElementById('app');

if (app) {
  render(<App />, app);
}
