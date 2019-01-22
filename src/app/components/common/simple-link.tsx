import { j } from "./j";

export const SimpleLink = ({ href, ...others }: Props) => {
    const shortUrl = href
        .replace(/mailto:/, '')
        .replace(/https?:\/\//, '')
        .replace(/tel:/, '')
    return <a href={href} {...others}>{shortUrl}</a>
}

interface Props extends JSX.HTMLAttributes {
    href: string;
}