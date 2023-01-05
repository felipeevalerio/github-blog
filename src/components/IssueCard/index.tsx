import { IssueCardContainer } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

interface IssueCardProps {
    title: string;
    createdAt: string;
    body: string;
    number: number;
}

export function IssueCard({title, body, createdAt, number}: IssueCardProps) {
    const navigate = useNavigate();
    
    const publishedDateUntilNow = formatDistanceToNow(new Date(createdAt), {
        addSuffix: true,
        locale: ptBR
    });

    function redirectToIssue() {
        navigate(`${number}`);
    }

    return (
        <IssueCardContainer onClick={redirectToIssue}>
            <header>
                <h2>{title}</h2>
                <span>{publishedDateUntilNow}</span>
            </header>
            <p>{body}</p>
        </IssueCardContainer>
    )
}