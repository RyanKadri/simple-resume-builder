import { App } from "./app/app";
import { browserRender } from "./app/components/common/browser-render";
import { j } from "./app/components/common/j";

const resumePath = "/resume.html";


if(location.pathname !== resumePath) {
    window.history.replaceState({}, "Ryan Kadri", resumePath);
}
browserRender(<App />, document.querySelector("#container") as HTMLDivElement);

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.bundle.js')
    })
}