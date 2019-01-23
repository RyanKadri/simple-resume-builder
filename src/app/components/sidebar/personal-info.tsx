import { faAddressBook, faCode, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { PersonalData } from "../../types/types";
import { FontAwesomeIcon } from "../common/fontawesome-icon";
import { j } from "../common/j";
import { SimpleLink } from "../common/simple-link";
import './personal-info.scss';


export const PersonalInfo = ({ info }: Props) => {
    const { streetAddress, addressLineTwo, cityStateZip, phone, email, github } = info;
    return <div class="personal-info">
        <header>
            <h2>Contact</h2>
        </header>
        <div class="info-grid">
            <FontAwesomeIcon iconDef={ faAddressBook } />
            <address class="physical">
                <p>{streetAddress}</p>
                <p>{addressLineTwo}</p>
                <p>{cityStateZip}</p>
            </address>
            
            <FontAwesomeIcon iconDef={ faPhone } />
            <SimpleLink class="phone" href={ phone } />

            <FontAwesomeIcon iconDef={ faEnvelope } />
            <SimpleLink class="email" href={ email } />

            <FontAwesomeIcon iconDef={ faCode } />
            <SimpleLink class="github" href={ github } />
        </div>
    </div>
}

interface Props {
    info: PersonalData
}