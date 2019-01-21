import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { h } from "preact";

export const FontAwesomeIcon = (props: Props) => {
    const { iconDef, ...others } = props;
    const width = iconDef.icon[0];
    const height = iconDef.icon[1];
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} className="fa-icon" {...others}>
        <path fill="currentColor" d={iconDef.icon[4]}></path>
    </svg>
}

interface Props extends JSX.HTMLAttributes {
    iconDef: IconDefinition;
}