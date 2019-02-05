import { Element, VNode } from "./j";

export const browserRender = (el: Element | JSX.Element, parent: HTMLElement) => {
    parent.innerHTML = "";
    parent.appendChild(_browserRender(el));
}

const _browserRender = (element: Element | JSX.Element) => {
    if(typeof element === "string") {
        return document.createTextNode(element);
    }
    const el = element as VNode;
    const node = el.nodeName === "svg" || el.nodeName === "path"
        ? document.createElementNS("http://www.w3.org/2000/svg", el.nodeName)
        : document.createElement(el.nodeName as string)
    Object.entries(el.attributes).forEach(([key, val]) => node.setAttribute(key, val));
    const flatChildren = flatten(el.children)
    flatChildren.forEach(child => {
        if(child) {
            node.appendChild(_browserRender(child))
        }
    })
    return node;
}

function flatten<T>(arr: (T | T[])[]) {
    const res: T[] = [];
    for(const el of arr) {
        if(Array.isArray(el)) {
            res.push(...flatten(el))
        } else {
            res.push(el)
        }
    }
    return res;
}