import { App } from "./app/app";
import { browserRender } from "./app/components/common/browser-render";
import { j } from "./app/components/common/j";

const resumePath = "/resume";

if(location.pathname !== resumePath) {
    window.history.replaceState({}, "Ryan Kadri", resumePath);
}
browserRender(<App />, document.body);