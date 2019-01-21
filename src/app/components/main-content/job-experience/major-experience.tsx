import { h } from "preact";
import { MajorExperience } from "../../../types/types";
import { DetailSubSection } from "../detail-section/detail-sub-section";
import { ExperienceHeader } from "../detail-section/sub-section-header";

export const MajorExperienceEntry = ({ experience }: MajorExperienceProps) => (
    <DetailSubSection 
        header={<ExperienceHeader 
            experience={experience.organization}
            location={experience.location}
            position={experience.position}
            duration={experience.duration} /> }
        wrapper={ (contents, clss) => <li className={clss}>{ contents }</li>}
    >
        <ul class="details">{
            experience.duties.map(duty => (
                <li>{duty}</li>
            ))
        }</ul>
    </DetailSubSection>
);

export interface MajorExperienceProps {
    experience: MajorExperience
}