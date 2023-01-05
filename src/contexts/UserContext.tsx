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
    user: User | null
}

export const UserContext = createContext({} as UserContextType);

interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps){ 
    const [user, setUser] = useState<User | null>(null);
    
    const fetchUserData = useCallback(async () => {
        const response = await axios.get('https://api.github.com/users/felipeevalerio');
        setUser(response.data);
    }, [])

    const fetchIssuesFromRepository = useCallback(async () => {

    }, []);

    useEffect(() => {
        fetchUserData();    
    }, [fetchUserData])

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}