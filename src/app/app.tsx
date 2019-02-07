import '../css/main.scss';
import '../css/print.scss';
import '../css/variables.scss';
import { j } from "./components/common/j";
import { MainContent } from "./components/main-content/main-content";
import { PersonalInfo } from "./components/sidebar/personal-info";
import { SkillSection } from "./components/sidebar/skill-section";
import { resumeData } from "./data/data";

export const App = () => {
    return <div class="app" {...{ itemscope: true, itemType: "http://schema.org/Person" }}>
        <PersonalInfo info={resumeData.personal} />
        <SkillSection skills={resumeData.skills} />
        <MainContent data={ resumeData } />
    </div>
}