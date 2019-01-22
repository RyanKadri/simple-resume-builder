import { EducationDetail } from "../../../types/types";
import { j } from "../../common/j";
import { DetailSubSection } from "../detail-section/detail-sub-section";
import { ExperienceHeader } from "../detail-section/sub-section-header";
import './education-section.scss';

export const EducationSection = ({ details }: EducationSectionProps) => (
    <ol>{
        details.map(experience => <EducationEntry experience={experience} />)
    }</ol>
)

const EducationEntry = ({ experience }: { experience: EducationDetail}) => (
    <DetailSubSection 
        header={ <ExperienceHeader 
                    experience={experience.institution} 
                    location={experience.location}
                    duration={experience.duration}
                    position={experience.field}
        />}
        wrapper={ (children, clss) => <li class={clss}>{children}</li>}
    >
        <ul class="highlights">{
            experience.highlights.map(highlight => (
                <li>{highlight}</li>
            ))
        }</ul>
        {
            experience.gpa === undefined
                ? null
                : <strong>GPA: {experience.gpa}</strong>
        }
    </DetailSubSection>
)

export interface EducationSectionProps {
    details: EducationDetail[];
}