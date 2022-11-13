import { SearchContainerStyled, SearchHeaderStyled } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useContext } from "react";
import { GitBlogContext } from "../../context/ContextApi";
import axios from "axios";

const serchFormSchema = zod.object({
    query: zod.string()
})

type SerchFormInput = zod.infer<typeof serchFormSchema>

export function SearchForm() {
    const {  register, handleSubmit, reset, formState: { isSubmitted }} = useForm<SerchFormInput>({
        resolver: zodResolver(serchFormSchema)
    })

    const { queryIssuesFunc, issues } = useContext(GitBlogContext)


    async function handleSearchIssues(data: SerchFormInput) {
        queryIssuesFunc(data.query)
        reset()
    }

    return (
        <SearchContainerStyled onSubmit={handleSubmit(handleSearchIssues)}>
            <SearchHeaderStyled>
                <h2>Publicações</h2>
                <p>{issues.length} publicações</p>
            </SearchHeaderStyled>

            <input type="text" placeholder="Buscar conteúdo" {...register('query')}/>
        </SearchContainerStyled>
    )
}
