import { LinkRedirection } from "../LinkRedirection";
import { ProfileContainer, ProfileBioHeader, ProfileBio, ProfileInfo } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { InfoWithIcon } from "../InfoWithIcon";

export function Profile() {
    const { user } = useContext(UserContext);

    return user && (
        <ProfileContainer>
            <img src={user.avatar_url} alt="Foto de perfil" />
            <ProfileBio>
                <ProfileBioHeader>
                    <h1>{user.name}</h1>
                    <LinkRedirection url={user.html_url} target="_blank" rel="noopener noreferrer">
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </LinkRedirection>
                </ProfileBioHeader>
                <p>{user.bio}</p>
                <ProfileInfo>
                    <InfoWithIcon icon={faGithub} info={user.login}/>
                    <InfoWithIcon icon={faBuilding} info={user.company}/>
                    <InfoWithIcon icon={faUserGroup} info={user.followers + ' seguidores'}/>
                </ProfileInfo>
            </ProfileBio>
        </ProfileContainer>
    )
}