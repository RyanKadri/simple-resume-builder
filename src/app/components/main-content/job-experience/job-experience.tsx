import { ExperienceData } from "../../../types/types";
import { j } from "../../common/j";
import './experience-section.scss';
import { MajorExperienceEntry } from "./major-experience";
import { MinorExperienceBlock } from "./minor-experiences";

export const JobExperience = ({ experience }: JobExperienceProps ) => (
    <ol class="past-jobs">
        { experience.major.map(entry => 
            <MajorExperienceEntry experience={entry} />
        )}
        { experience.minor && experience.minor.length > 0
            ? <MinorExperienceBlock experiences={experience.minor} />
            : null }
    </ol>
)

export interface JobExperienceProps {
    experience: ExperienceData
}