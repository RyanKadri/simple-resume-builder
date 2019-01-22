import { El, VNode } from "./j";

export const browserRender = (el: El | JSX.Element, parent: HTMLElement) => {
    parent.appendChild(_browserRender(el));
}

const _browserRender = (element: El | JSX.Element) => {
    if(typeof element === "string") {
        return document.createTextNode(element);
    }
    const el = element as VNode;
    const node = el.type === "svg" || el.type === "path"
        ? document.createElementNS("http://www.w3.org/2000/svg", el.type)
        : document.createElement(el.type)
    Object.entries(el.attributes).forEach(([key, val]) => node.setAttribute(key, val));
    const flatChildren = el.children.flat(Infinity);
    flatChildren.forEach(child => {
        if(child) {
            node.appendChild(_browserRender(child))
        }
    })
    return node;
}