import { h, render } from 'preact';
import { App } from "./app/app";
import './css/main.css';
import './css/print.css';
import './css/variables.css';

const resumePath = "/resume";

if(location.pathname !== resumePath) {
    location.replace(resumePath)
}
render(<App />, document.body);