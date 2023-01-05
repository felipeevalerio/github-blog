import styled from "styled-components";

export const IssueCardContainer = styled.article`
    border: 1px solid transparent;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    transition: border-color 0.2s;
    cursor: pointer;
    background: ${props => props.theme["base-post"]};
    border-radius: 10px;
    width: 416px;
    height: 260px; 

    &:hover {
        border-color: ${props => props.theme["base-label"]};
    } 

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-size: 1.25rem;
            color: ${props => props.theme["base-title"]};
        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme["base-span"]};
        }
    }

    p {
        color: ${props => props.theme["base-text"]};
        overflow: hidden;
        text-overflow: ellipsis;
    }
`