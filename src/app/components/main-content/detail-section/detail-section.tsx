import { Element, j } from "../../common/j";
import './detail-section.scss';

export function DetailSection(props: DetailSectionProps) {
    const { body, children, header } = props; 
    return <section class="detail-section">
    <header>{ header }</header>
    {
        body !== undefined
            ? <p class="detail-body">{ body }</p>
            : <section class="detail-body">{
                children || []
            }</section>
    }
</section>
}

export interface DetailSectionProps {
    header: string;
    body?: string;
    children?: Element | (Element | null)[];
}
