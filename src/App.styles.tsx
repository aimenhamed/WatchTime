import styled from 'styled-components';

export const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const AppHeader = styled.header`
    background-color: #373b69;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`;

export const Search = styled.input`
    background-color: transparent;
    border: 2px solid #22254b;
    border-radius: 50px;
    color: #22254b;
    font-family: inherit;
    font-size: 1.2rem;
    padding: 0.5rem 1.5rem;
`;