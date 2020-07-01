import { ResumeData } from "../../types/types";
import { j } from "../common/j";
import { SimpleLink } from "../common/simple-link";
import { DetailSection } from "./detail-section/detail-section";
import { EducationSection } from "./education/education-section";
import { JobExperience } from "./job-experience/job-experience";
import './main-content.scss';
import { ProjectSection } from "./project-section/project-section";

export const MainContent = ({ data }: MainContentProps) => { 
    return <main class="main-content">
        <header class="main-header">
            <h1 class="name" { ...{itemprop: "name"}}>{ data.personal.name }</h1>
            <h2 class="profession" { ...{itemprop: "jobTitle"}}>{ data.personal.profession }</h2>
        </header>
        <DetailSection header="About Me" body={ data.interests } bodyAttrs={ { itemprop: "description" } } />
        <DetailSection header="Experience">
            <JobExperience experience={ data.experience } />
        </DetailSection>
        <DetailSection header="Education" >
            <EducationSection details={ data.education } />
        </DetailSection>
        <DetailSection header="Projects">
            <ProjectSection projects={data.projects} />
        </DetailSection>
        <aside class="view-online">
            View this resume online at <SimpleLink href="https://resume.rk0.xyz" />
        </aside>
    </main>
}

export interface MainContentProps {
    data: ResumeData;
}