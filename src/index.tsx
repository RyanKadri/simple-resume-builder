import { App } from "./app/app";
import { browserRender } from "./app/components/common/browser-render";
import { j } from "./app/components/common/j";

browserRender(<App />, document.querySelector("#container") as HTMLDivElement);

if("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations()
        .then((registrations) => {
            registrations.forEach(reg => reg.unregister());
        })
}
// if('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('./service-worker.bundle.js')
//     })
// }