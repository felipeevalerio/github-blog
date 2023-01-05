import { Link } from "../Link";
import { ProfileContainer, ProfileBioHeader, ProfileBio, ProfileInfo, ProfileInfoWithIcon } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Profile() {
    const { user } = useContext(UserContext);

    return user && (
        <ProfileContainer>
            <img src={user.avatar_url} alt="Foto de perfil" />
            <ProfileBio>
                <ProfileBioHeader>
                    <h1>{user.name}</h1>
                    <Link title="GITHUB" url={user.html_url}/>
                </ProfileBioHeader>
                <p>{user.bio}</p>
                <ProfileInfo>
                    <ProfileInfoWithIcon>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>{user.login}</span>
                    </ProfileInfoWithIcon>
                    <ProfileInfoWithIcon>
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>{user.company}</span>
                    </ProfileInfoWithIcon>
                    <ProfileInfoWithIcon>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span>{user.followers} seguidores</span>
                    </ProfileInfoWithIcon>
                </ProfileInfo>
            </ProfileBio>
        </ProfileContainer>
    )
}