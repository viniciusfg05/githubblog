import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";


interface GitBlogProviderProps {
    children: ReactNode; // qualquer html valido
}

interface IssuesProps {
    // body: string
    // created_at: string;
    // title: string;
}

interface DataIssuesProps {
    dataIssues: any
}

interface GitBlogPropsTypes {
    issues: any;
}

export const GitBlogContext = createContext({} as GitBlogPropsTypes);


export function GitBlogProvider({ children }: GitBlogProviderProps) {

    const [ responseIgnite22Timer, setResponseIgnite22Timer ] = useState([])
    const [ responseGithubblog, setResponseGithubblog ] = useState([])
    
    const [ issues, setIssues ] = useState<any[]>([])
    
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
        // console.log(responseGithubblog.data)
    }
    console.log(issues)


    useEffect(() => {
        issuesfetch()
    }, [])

    return (
        <GitBlogContext.Provider value={{ issues }}>
            {children}
        </GitBlogContext.Provider>
    )
}
