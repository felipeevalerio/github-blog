import { LinkContainer } from "./styles";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkRedirectionProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
    url: string;
    children: ReactNode;
}

export function LinkRedirection({children, url, ...props}: LinkRedirectionProps) {
    return (
        <LinkContainer href={url} {...props}>
            {children}
        </LinkContainer>
    );
}