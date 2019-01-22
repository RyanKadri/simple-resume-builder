import { faAddressBook, faCode, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { PersonalData, SkillDefinition } from "../../types/types";
import { FontAwesomeIcon } from "../common/fontawesome-icon";
import { j } from "../common/j";
import { SimpleLink } from "../common/simple-link";
import './sidebar.scss';
import { SkillSection } from "./skill-section";

export const Sidebar = ({ personal, skills }: SidebarProps) => {
    const { address, phone, email, github } = personal;

    return <nav class="sidebar">
        <div class="personal-info">
            <header>
                <h2>Contact</h2>
            </header>
            <div class="info-grid">
                <FontAwesomeIcon iconDef={ faAddressBook } />
                <address class="physical">{ address.trim() }</address>
                
                <FontAwesomeIcon iconDef={ faPhone } />
                <SimpleLink class="phone" href={ phone } />

                <FontAwesomeIcon iconDef={ faEnvelope } />
                <SimpleLink class="email" href={ email } />

                <FontAwesomeIcon iconDef={ faCode } />
                <SimpleLink class="github" href={ github } />
            </div>
        </div>
        <SkillSection skills={skills} />
      </nav>
}

export interface SidebarProps {
    personal: PersonalData;
    skills: SkillDefinition[];
}