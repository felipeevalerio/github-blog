import axios from "axios";
import { createContext, ReactNode, useCallback, useEffect, useState } from "react";

interface User {
    name: string;
    username: string;
    avatar_url: string;
    company: string;
    followers: number;
    bio: string;
    login: string;
    html_url: string;
}

interface UserContextType {
    user: User | null;
    fetchIssuesFromRepository: (query?: string) => void;
    issues: Issue[];
    issueDetails: IssueDetails | null;
    fetchDetailsFromIssue: (issueNumber: string) => void;
}

interface Issue {
    title: string;
    body: string;
    created_at: string;
    number: number;
}

interface IssueDetails extends Issue {
    comments: number;
    username: string;
}

export const UserContext = createContext({} as UserContextType);

interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps){ 
    const [user, setUser] = useState<User | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);
    const [issueDetails, setIssueDetails] = useState<IssueDetails | null>(null)

    const fetchUserData = useCallback(async () => {
        const response = await axios.get('https://api.github.com/users/felipeevalerio');
        setUser(response.data);
    }, [])

    const fetchIssuesFromRepository = useCallback(async (query?: string) => {
        let url = 'https://api.github.com/search/issues?q=';
        const paramsURL = '%20repo:felipeevalerio/github-blog';
        
        if (query) {
            url += query; 
        }

        url += paramsURL;

        const response = await axios.get(url)
        setIssues(response.data.items);
    }, []);

    const fetchDetailsFromIssue = useCallback(async (issueNumber: string) => {
        const response = await axios.get(`https://api.github.com/repos/felipeevalerio/github-blog/issues/${issueNumber}`)
        setIssueDetails({
            comments: response.data.comments,
            username: response.data.user.login,
            body: response.data.body,
            created_at: response.data.created_at,
            number: response.data.number,
            title: response.data.title
        })
    }, []); 

    useEffect(() => {
        fetchUserData();    
        fetchIssuesFromRepository();
    }, [fetchUserData]);

    return (
        <UserContext.Provider value={{user, fetchIssuesFromRepository, issues, fetchDetailsFromIssue, issueDetails}}>
            {children}
        </UserContext.Provider>
    )
}