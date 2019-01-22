import { MinorExperience } from "../../../types/types";
import { j } from "../../common/j";
import { DetailSubSection } from "../detail-section/detail-sub-section";
import { ExperienceHeader } from "../detail-section/sub-section-header";

export const MinorExperienceBlock = ({ experiences }: MinorExperienceBlockProps ) => (
    <DetailSubSection header={
        <ExperienceHeader experience="Other Experience" />
    }>
        <ol class="details minor-experience-list">{
            experiences.map(experience => (
                <li><em>{ experience.position }</em>{ experience.summary }</li>
            ))
        }
        </ol>
    </DetailSubSection>
)

export interface MinorExperienceBlockProps {
    experiences: MinorExperience[]
}