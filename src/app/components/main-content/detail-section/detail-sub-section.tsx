import { ComponentChildren, h } from "preact";
import "./detail-sub-section.scss";

export const DetailSubSection = (props: DetailSubSectionProps) => {
    const { children, header } = props;
    const wrapper = props.wrapper === undefined
        ? (children: JSX.Element[], clss: string) => <section className={clss}>{children}</section>
        : props.wrapper

    return wrapper([header, children as JSX.Element], "detail-sub-section");
}

export interface DetailSubSectionProps {
    children: ComponentChildren;
    header: JSX.Element;
    wrapper?: (children: JSX.Element[], clss: string) => JSX.Element
}