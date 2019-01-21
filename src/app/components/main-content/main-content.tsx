import { h } from "preact";
import { ResumeData } from "../../types/types";
import { DetailSection } from "./detail-section/detail-section";
import { EducationSection } from "./education/education-section";
import { JobExperience } from "./job-experience/job-experience";
import './main-content.scss';
import { ProjectSection } from "./project-section/project-section";

export const MainContent = ({ data }: MainContentProps) => { 
    return <main class="main-content">
        <header class="main-header">
            <h1 class="name">{ data.personal.name }</h1>
            <h2 class="profession">{ data.personal.profession }</h2>
        </header>
        <DetailSection header="Interests" body={ data.interests } />
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
            View this resume online at <a href="https://ryankadri.github.io"></a>
        </aside>
    </main>
}

export interface MainContentProps {
    data: ResumeData;
}