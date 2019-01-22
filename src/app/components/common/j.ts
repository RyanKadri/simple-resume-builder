export const j = (type: string | ((...args: any[]) => El), attributes: AttrMap | null, ...children: El[]) => {
    if(typeof type === 'function') {
        return type({ ...attributes, children: children || [] })
    } else {
        return {
            type,
            attributes: attributes || {},
            children 
        };
    }
}

export type El = string | VNode;

export interface VNode {
    type: string;
    attributes: AttrMap;
    children: El[];
}

export type AttrMap = {
    [attr: string]: string;
}