import fs from 'fs';
import './absolutely-awful-polyfills';
import { App } from "./app/app";
import { j } from "./app/components/common/j";
import { renderInNode } from "./app/components/common/ssr-render";

declare const styleEl: any;

const index = fs.readFileSync('./src/index.html', { encoding: 'utf8' });
const serializedApp = index
    .replace("<!-- STATIC_CONTENT -->", renderInNode(<App />))
    .replace("<!-- STYLES -->", `<style type="text/css">${styleEl.contents}</style>`)
fs.writeFileSync('./dist/index-ssr.html', serializedApp);