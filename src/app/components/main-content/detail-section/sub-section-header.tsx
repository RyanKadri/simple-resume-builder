import { h } from "preact";
import "./sub-section-header.scss";

export const ExperienceHeader = ({ experience, location, position, duration }: SubSectionHeaderProps) => (
    <header class="subsection-header">
        <em class="experience">{ experience }</em>
        { location !== undefined ? <span class="location">{ location }</span> : null }
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