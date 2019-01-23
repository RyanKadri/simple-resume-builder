import { j } from "../../common/j";
import "./sub-section-header.scss";

export const ExperienceHeader = ({ experience, position, duration }: SubSectionHeaderProps) => (
    <header class="subsection-header">
        <em class="experience">{ experience }</em>
        { position !== undefined ? <i class="position">{ position }</i> : null }
        { duration !== undefined ? <time class="duration">{ duration }</time> : null }
    </header>
)

export interface SubSectionHeaderProps {
    experience: string;
    location?: string;
    position?: string;
    duration?: string;
}