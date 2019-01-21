import { faAddressBook, faCode, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { h } from "preact";
import { PersonalData, SkillDefinition } from "../../types/types";
import { FontAwesomeIcon } from "../common/fontawesome-icon";
import './sidebar.scss';
import { SkillSection } from "./skill-section";

export const Sidebar = ({ personal, skills }: SidebarProps) => {
    const { address, phone, email, github } = personal;

    return <nav class="sidebar">
        <div class="personal-info">
            <header>
                <h2>
                    Contact
                </h2>
            </header>
            <div class="info-grid">
                <FontAwesomeIcon iconDef={ faAddressBook } />
                <address class="physical">{ address.trim() }</address>
                
                <FontAwesomeIcon iconDef={ faPhone } />
                <a class="phone" href={ `tel:${phone}` }>{phone}</a>

                <FontAwesomeIcon iconDef={ faEnvelope } />
                <a type="email" href={ `mailto:${ email }`}>{ email }</a>

                <FontAwesomeIcon iconDef={ faCode } />
                <a class="github" href={ github } data-friendly="Github"></a>
            </div>
        </div>
        <SkillSection skills={skills} />
      </nav>
}

export interface SidebarProps {
    personal: PersonalData;
    skills: SkillDefinition[];
}