import { Link, useNavigate, useParams } from "react-router-dom";
import { IssueContainer, IssueHeader, IssueInfo } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkRedirection } from "../../components/LinkRedirection";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Issue() {
    const { fetchDetailsFromIssue, issueDetails } = useContext(UserContext);
    const { number } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (number) {
            fetchDetailsFromIssue(number);
        } else {
            navigate('/')
        }
    }, [])

    return issueDetails && (
        <IssueContainer>
            <IssueHeader>
                <nav>
                    <LinkRedirection url='/'>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        VOLTAR
                    </LinkRedirection>
                    <LinkRedirection target="_blank" rel="noopener" url={`https://github.com/felipeevalerio/github-blog/issues/${number}`}>
                        VER NO GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </LinkRedirection>
                </nav>
                <h1>Teste</h1>
                <IssueInfo>
                    <InfoWithIcon icon={faGithub} info={issueDetails.username}/>
                    <InfoWithIcon icon={faCalendarDay} info={formatDistanceToNow(new Date(issueDetails.created_at), { addSuffix: true,locale: ptBR})}/>
                    <InfoWithIcon icon={faComment} info={issueDetails.comments + ' comentários'}/>
                </IssueInfo>
            </IssueHeader>
        </IssueContainer>
    )
}