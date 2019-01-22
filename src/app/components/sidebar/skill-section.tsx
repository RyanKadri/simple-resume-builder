import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { SkillDefinition } from "../../types/types";
import { FontAwesomeIcon } from "../common/fontawesome-icon";
import { j } from "../common/j";
import './skill-section.scss';

export const SkillSection = ({ skills }: Props) => (
    <section class="skills">
        <header><h2>Skills</h2></header>
        <ol>{
            skills.map(skill => <SkillLine skill={skill} /> )
        }</ol>
    </section>
)

const SkillLine = ({ skill }: { skill: SkillDefinition }) => {
    const unconfidencePercent = (100 - skill.confidence) / 100;
    return <li>
            <FontAwesomeIcon iconDef={ faThumbsUp } style={ `transform: rotate(-${unconfidencePercent * 180}deg)`} />
            { skill.name }
        </li>
}

interface Props {
    skills: SkillDefinition[]
}