import { createContext, ReactNode, useEffect, useState } from "react";


interface GitBlogProviderProps {
    children: ReactNode; // qualquer html valido
}

interface IssuesProps {
    body: string
    created_at: string;
    title: string;
    comments: number;
}

interface GitBlogPropsTypes {
    issues: IssuesProps[]
}

export const GitBlogContext = createContext({} as GitBlogPropsTypes);


export function GitBlogProvider({ children }: GitBlogProviderProps) {
    const [ issues, setIssues ] = useState<IssuesProps[]>([])
    
    const issuesfetch = async () => {
        const fetchIssue = {
            users: "viniciusfg05",
            fetch: "Boa",
            repo: "githubblog"
        }

        fetch(`https://api.github.com/search/issues?q=${fetchIssue.fetch}%20repo:${fetchIssue.users}/${fetchIssue.repo}`) //rota possivelmente criariamos no futuro
        .then(response => response.json())
        .then(data => setIssues(data.items)) //console .log nos dados
    }

    const data = async () => {
        fetch(`https://api.github.com/search/issues?q=${fetchIssue.fetch}%20repo:${fetchIssue.users}`) //rota possivelmente criariamos no futuro
        .then(response => response.json())
        .then(data => setIssues(data.items)) //console .log nos dados
    }

    useEffect(() => {
        issuesfetch()
    }, [])

    return (
        <GitBlogContext.Provider value={{ issues }}>
            {children}
        </GitBlogContext.Provider>
    )
}
