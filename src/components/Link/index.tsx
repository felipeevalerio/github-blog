import { LinkContainer } from "./styles";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LinkProps {
    title: string;
    url: string;
}

export function Link({title, url}: LinkProps) {
    return (
        <LinkContainer href={url} target="_blank" rel="noreferrer noopener">
            {title}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
        </LinkContainer>
    );
}