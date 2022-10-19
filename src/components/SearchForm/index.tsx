import { SearchContainerStyled, SearchHeaderStyled } from "./styles";

export function SearchForm() {
    return (
        <SearchContainerStyled>
            <SearchHeaderStyled>
                <h2>Publicações</h2>
                <p>6 publicações</p>
            </SearchHeaderStyled>

            <input type="text" placeholder="Buscar conteúdo"/>
        </SearchContainerStyled>
    )
}
