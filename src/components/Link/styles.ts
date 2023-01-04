import styled from "styled-components";

export const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${props => props.theme.blue};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    font-size: 0.75rem;
    transition: border-color 0.2s;
    
    &:hover {
        border-color: ${props => props.theme.blue};
    }
`