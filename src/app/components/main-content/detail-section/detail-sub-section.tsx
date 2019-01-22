import { ComponentChildren } from "preact";
import { j } from "../../common/j";
import "./detail-sub-section.scss";

export function DetailSubSection(props: DetailSubSectionProps) {
    const { children, header } = props;
    const wrapper = props.wrapper === undefined
        ? (children: JSX.Element[], clss: string) => <section class={clss}>{children}</section>
        : props.wrapper

    return wrapper([header, children as JSX.Element], "detail-sub-section");
}

export interface DetailSubSectionProps {
    children: ComponentChildren;
    header: JSX.Element;
    wrapper?: (children: JSX.Element[], clss: string) => JSX.Element
}