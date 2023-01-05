import { useContext } from "react";
import { IssueCard } from "../../components/IssueCard";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { UserContext } from "../../contexts/UserContext";
import { HomeContainer, IssuesContainer } from "./styles";

export function Home() {
    const { issues } = useContext(UserContext);
    
    return (
        <HomeContainer>
            <Profile/>
            <SearchForm/>
            <IssuesContainer>
                {issues.map(issue => {
                    return <IssueCard 
                        key={issue.number}
                        number={issue.number}
                        body={issue.body}
                        createdAt={issue.created_at}
                        title={issue.title}
                    />
                })}
            </IssuesContainer>
        </HomeContainer>
    )
};