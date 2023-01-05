import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        color: ${props => props.theme["base-subtitle"]};
    }

    svg {
        height: 1.125rem;
        width: 1.125rem;
        color: ${props => props.theme["base-label"]};
    }
`