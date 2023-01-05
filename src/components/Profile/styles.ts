import styled from "styled-components";

export const ProfileContainer = styled.section`
    padding: 2rem 2.5rem;
    border-radius: 10px;
    background: ${props => props.theme["base-profile"]};
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
        border-radius: 8px;
        height: 9.25rem;
        width: 9.25rem;
    }
`;

export const ProfileBio = styled.div`
    display:flex;
    flex-direction: column;
    flex: 1;

    p {
        color: ${props => props.theme["base-text"]};
        margin: 0.5rem 0 1.5rem;
    }
`

export const ProfileBioHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h1 {
        color: ${props => props.theme["base-title"]};
        font-size: 1.5rem;
        line-height: 130%;
    }
`

export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;