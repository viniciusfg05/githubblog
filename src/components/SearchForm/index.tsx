import { SearchContainerStyled, SearchHeaderStyled } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useContext } from "react";
import { GitBlogContext } from "../../context/ContextApi";

const serchFormSchema = zod.object({
    query: zod.string()
})

type SerchFormInput = zod.infer<typeof serchFormSchema>

export function SearchForm() {
    const {  register, handleSubmit, formState: { isSubmitted }} = useForm<SerchFormInput>({
        resolver: zodResolver(serchFormSchema)
    })

    const { issues } = useContext(GitBlogContext)


    async function handleSearchIssues(data: SerchFormInput) {
        console.log(data)
    }

    // const res = issues.filter(issues => issues.body !== "prin")
    // console.log(res)
    // // console.log(issues)

    return (
        <SearchContainerStyled onSubmit={handleSubmit(handleSearchIssues)}>
            <SearchHeaderStyled>
                <h2>Publicações</h2>
                <p>6 publicações</p>
            </SearchHeaderStyled>

            <input type="text" placeholder="Buscar conteúdo" {...register('query')}/>
        </SearchContainerStyled>
    )
}
