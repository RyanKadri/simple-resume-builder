import { El, VNode } from "./j";

export const renderInNode = (element: El | JSX.Element): string => {
    if(typeof element === "string") {
        return element;
    } else {
        const el = element as VNode;
        const tag = el.type;
        const attributes = Object.entries(el.attributes)
            .map(([key, val]) => `${key}="${val}"`)
            .join(" ");

        const children = el.children.flat(Infinity);
        
        return `<${tag} ${attributes}>${children.map(child => 
            !!child ? renderInNode(child) : "").join(" ")}</${tag}>`;
    }
}