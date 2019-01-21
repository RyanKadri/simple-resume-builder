import { ComponentChildren, ComponentProps } from "preact";

export const If = ({ condition, children }: IfProps) => {
    return condition !== false 
        ? children
        : null
};

export interface IfProps extends ComponentProps {
    condition: boolean;
    children: ComponentChildren;
}