import { Element, VNode } from "./j";

export const renderInNode = (element: Element | JSX.Element): string => {
    if(typeof element === "string") {
        return element;
    } else {
        const el = element as VNode;
        const tag = el.nodeName;
        const attributes = Object.entries(el.attributes)
            .map(([key, val]) => `${key}="${val}"`)
            .join(" ");

        const children = el.children.flat(Infinity);
        
        return `<${tag} ${attributes}>${children.map(child => 
            !!child ? renderInNode(child) : "").join(" ")}</${tag}>`;
    }
}