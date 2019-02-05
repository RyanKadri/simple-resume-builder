import { ProjectDefinition } from "../../../types/types";
import { j } from "../../common/j";
import { SimpleLink } from "../../common/simple-link";
import { DetailSubSection } from "../detail-section/detail-sub-section";
import { ExperienceHeader } from "../detail-section/sub-section-header";

export const ProjectSection = ({ projects }: Props) => (
    <ul class="project-list">{
        projects.map(project => <ProjectDefinition project={project} />)
    }</ul>
)

const ProjectDefinition = ({ project }: ProjectDefProps) => (
    <DetailSubSection 
        header={ <ExperienceHeader experience={ project.name } /> }
        wrapper={(contents, clss) => <li class={clss}>{contents}</li>}    
    >
        <div class="details">
            <p>{ project.summary }</p>
            { project.link ? <p>Link: <SimpleLink href={project.link} /></p> : null }
        </div>
    </DetailSubSection>
)

interface Props {
    projects: ProjectDefinition[];
}

interface ProjectDefProps {
    project: ProjectDefinition;
}