import { h } from "preact";
import { MainContent } from "./components/main-content/main-content";
import { Sidebar } from "./components/sidebar/sidebar";

export const App = () => {
    return <div class="app">
        <Sidebar />
        <MainContent />
    </div>
}