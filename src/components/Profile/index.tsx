import { Link } from "../Link";
import { ProfileContainer, ProfileBioHeader, ProfileBio, ProfileInfo, ProfileInfoWithIcon } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
    return (
        <ProfileContainer>
            <img src="https://github.com/felipeevalerio.png" alt="Foto de perfil" />
            <ProfileBio>
                <ProfileBioHeader>
                    <h1>Felipe Valério</h1>
                    <Link title="GITHUB" url="https://github.com/felipeevalerio"/>
                </ProfileBioHeader>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <ProfileInfo>
                    <ProfileInfoWithIcon>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>felipeevalerio</span>
                    </ProfileInfoWithIcon>
                    <ProfileInfoWithIcon>
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>Rocketseat</span>
                    </ProfileInfoWithIcon>
                    <ProfileInfoWithIcon>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span>32 seguidores</span>
                    </ProfileInfoWithIcon>
                </ProfileInfo>
            </ProfileBio>
        </ProfileContainer>
    )
}