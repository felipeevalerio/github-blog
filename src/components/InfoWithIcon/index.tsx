import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoWithIconContainer } from "./styles";

interface InfoWithIconProps {
    info: string;
    icon: IconProp;
}

export function InfoWithIcon({info, icon}: InfoWithIconProps) {
    return (
        <InfoWithIconContainer>
            <FontAwesomeIcon icon={icon} />
            <span>{info}</span>
        </InfoWithIconContainer>
    );
}