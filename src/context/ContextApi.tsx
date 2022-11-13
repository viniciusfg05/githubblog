import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";


interface GitBlogProviderProps {
    children: ReactNode; // qualquer html valido
}

export interface IssuesProps {
    id: number;
    body: string
    created_at: string;
    title: string;
}

interface DataIssuesProps {
    dataIssues: any
}

interface GitBlogPropsTypes {
    issues: IssuesProps[];
    queryIssues: IssuesProps;
    queryIssuesFunc: (data: string) => void;
}

export const GitBlogContext = createContext({} as GitBlogPropsTypes);


export function GitBlogProvider({ children }: GitBlogProviderProps) {
    
    const [ issues, setIssues ] = useState<any[]>([])
    const [ queryIssues, setQueryIssues ] = useState<any>([])

    const issuesfetch = async () => {

        const responseIgnite22Timer1 = await axios.get('https://api.github.com/repos/viniciusfg05/ignite22-timer/issues/1')
        const responseIgnite22Timer2 = await axios.get('https://api.github.com/repos/viniciusfg05/ignite22-timer/issues/2')
        const responseGithubblog = await axios.get('https://api.github.com/repos/viniciusfg05/githubblog/issues/1')

        
        const dataIssues = [
            responseIgnite22Timer1.data,
            responseIgnite22Timer2.data,
            responseGithubblog.data,
        ]

        setIssues(dataIssues)
    }

    async function queryIssuesFunc(data: string) {
        const blog = await axios.get(`https://api.github.com/search/issues?q=${data}%20repo:${"viniciusfg05"}/${"githubblog"}`)
        const timer = await axios.get(`https://api.github.com/search/issues?q=${data}%20repo:${"viniciusfg05"}/${'ignite22-timer'}`)

        setIssues(timer.data.items)
    }

    useEffect(() => {
        issuesfetch()
    }, [])

    return (
        <GitBlogContext.Provider value={{ issues, queryIssues, queryIssuesFunc }}>
            {children}
        </GitBlogContext.Provider>
    )
}
