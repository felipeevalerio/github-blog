import styled from "styled-components";

export const IssueContainer = styled.div`
    color: ${props =>props.theme['base-text']};
`

export const IssueHeader = styled.header`
    margin-bottom: 2.5rem;
    background: ${props => props.theme["base-profile"]};
    padding: 2rem;
    display: flex;
    border-radius: 10px;
    flex-direction: column;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        color: ${props => props.theme["base-title"]};
        font-size: 1.5rem;
        margin: 1.25rem 0 0.5rem;
    }
`

export const IssueInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;