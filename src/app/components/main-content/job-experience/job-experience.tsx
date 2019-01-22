import { ExperienceData } from "../../../types/types";
import { j } from "../../common/j";
import './experience-section.scss';
import { MajorExperienceEntry } from "./major-experience";
import { MinorExperienceBlock } from "./minor-experiences";

export const JobExperience = ({ experience }: JobExperienceProps ) => (
    <ol class="past-jobs">
        {experience.major.map(entry => <MajorExperienceEntry experience={entry} />)}
        <MinorExperienceBlock experiences={experience.minor} />
    </ol>
)

export interface JobExperienceProps {
    experience: ExperienceData
}