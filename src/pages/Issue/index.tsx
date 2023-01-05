import { useParams } from "react-router-dom";

export function Issue() {
    const { number } = useParams();
    return (<>{number}</>)
}