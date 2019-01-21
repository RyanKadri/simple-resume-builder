import { h } from "preact";
import { MainContent } from "./components/main-content/main-content";
import { Sidebar } from "./components/sidebar/sidebar";
import { resumeData } from "./data/data";

export const App = () => {
    return <div class="app">
        <Sidebar personal={ resumeData.personal } skills={ resumeData.skills } />
        <MainContent data={ resumeData } />
    </div>
}