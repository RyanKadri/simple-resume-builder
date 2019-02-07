import { SkillDefinition } from "../../types/types";
import { j } from "../common/j";
import './skill-section.scss';

export const SkillSection = ({ skills }: Props) => (
    <section class="skills">
        <header><h2>Skills</h2></header>
        <ol>{
            skills.slice()
                .sort((a,b) => b.confidence - a.confidence)
                .map(skill => <SkillLine skill={skill} /> )
        }</ol>
    </section>
)

const SkillLine = ({ skill }: { skill: SkillDefinition }) => {
    const unconfidencePercent = (100 - skill.confidence) / 100;
    const xPos = 50 + 50 * Math.cos(unconfidencePercent * Math.PI);
    const yPos = 50 - 50 * Math.sin(unconfidencePercent * Math.PI);
    return <li { ...{itemprop: "knowsAbout"}}>
            <svg viewBox="0 0 100 50" class="confidence-chart">
                <path d={`M 0 50 A 50 50 1 0 1 ${xPos} ${yPos} L 50 50`}></path>
            </svg>
            { skill.name }
        </li>
}

interface Props {
    skills: SkillDefinition[]
}