import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 4.5rem 0 3rem;
    
    input {
        background: ${props => props.theme["base-input"]};
        border-radius: 6px;
        padding: 0.75rem 1rem;
        color: ${props => props.theme["base-text"]};
        border: 1px solid ${props => props.theme["base-border"]};
        transition: border-color 0.2s;

        &:focus {
            border-color: ${props => props.theme.blue};
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        &::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }
`

export const SearchFormHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.125rem;
    }

    span {
        color: ${props => props.theme["base-span"]};
        font-size: 0.875rem;
    }
`