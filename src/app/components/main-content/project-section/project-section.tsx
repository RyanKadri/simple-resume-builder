import { h } from "preact";
import { ProjectDefinition } from "../../../types/types";
import { DetailSubSection } from "../detail-section/detail-sub-section";
import { ExperienceHeader } from "../detail-section/sub-section-header";

export const ProjectSection = ({ projects }: Props) => (
    <ul class="project-list">{
        projects.map(project => <ProjectDefinition project={project} />)
    }</ul>
)

const ProjectDefinition = ({ project }: ProjectDefProps) => (
    <DetailSubSection header={ <ExperienceHeader experience={ project.name } /> }>
        <div class="details">
            <p>{ project.summary }</p>
            Link: { project.link ? <a href={project.link} data-friendly="Here"></a> : <span>N/A</span> }
        </div>
    </DetailSubSection>
)

interface Props {
    projects: ProjectDefinition[];
}

interface ProjectDefProps {
    project: ProjectDefinition;
}