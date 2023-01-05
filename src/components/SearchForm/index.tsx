import { SearchFormContainer, SearchFormHeader } from "./styles";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { issues, fetchIssuesFromRepository  } = useContext(UserContext);
    const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    async function handleSearchIssuesFromRepository(data: SearchFormInputs) {
        fetchIssuesFromRepository(data.query);
        reset();
    }

    const numberOfIssues = issues.length;

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchIssuesFromRepository)}>
            <SearchFormHeader>
                <h3>Publicações</h3>
                <span>{numberOfIssues} publicações</span>
            </SearchFormHeader>
            <input 
                type="text" 
                placeholder="Buscar conteúdo" 
                {...register('query')}
            />
        </SearchFormContainer>
    );
}