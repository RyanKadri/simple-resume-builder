import { ComponentConstructor, FunctionalComponent } from "preact";

export const j = (nodeName: string | FunctionalComponent<any>, attributes: AttrMap | null, ...children: Element[]) => {
    if(typeof nodeName === 'function') {
        return nodeName({ ...attributes, children: children || [] })
    } else {
        return {
            nodeName,
            attributes: attributes || {},
            children 
        };
    }
}

export type Element = string | VNode;

export interface VNode {
    nodeName: string | FunctionalComponent<any> | ComponentConstructor<any>;
    attributes: AttrMap;
    children: Element[];
}

export type AttrMap = {
    [attr: string]: string;
}