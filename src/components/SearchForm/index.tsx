import { SearchFormContainer, SearchFormHeader } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <SearchFormHeader>
                <h3>Publicações</h3>
                <span>6 publicações</span>
            </SearchFormHeader>
            <input 
                type="text" 
                placeholder="Buscar conteúdo" 
            />
        </SearchFormContainer>
    );
}