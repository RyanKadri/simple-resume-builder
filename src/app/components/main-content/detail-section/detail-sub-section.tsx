import { Element, j, VNode } from "../../common/j";
import "./detail-sub-section.scss";

export function DetailSubSection(props: DetailSubSectionProps) {
    const { children, header } = props;
    const wrapper = props.wrapper === undefined
        ? (children: Element[], clss: string) => <section class={clss}>{children}</section>
        : props.wrapper

    const arrChildren = Array.isArray(children) ? children : [children];
    return wrapper([header as Element, ...(arrChildren as Element[])], "detail-sub-section");
}

export interface DetailSubSectionProps {
    children: (Element | null)[] | Element | null;
    header: Element | JSX.Element;
    wrapper?: (children: Element[], clss: string) => VNode
}