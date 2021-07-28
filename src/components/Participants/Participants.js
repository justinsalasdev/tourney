import useFetch from "./useFetch";
import { Link } from "react-router-dom";

export default function Participants({ tournamentURL }) {
  const { participants, isLoading } = useFetch(tournamentURL);

  const isAdd = participants.length < 8;
  const isReady = participants.length > 1 && participants.length % 2 === 0;

  if (isLoading) {
    return <div>..loading participants...</div>;
  }

  return (
    <div>
      <ul>
        {participants.map((participant) => {
          return <li key={participant.id}>{participant.attributes.name}</li>;
        })}
        {isAdd && (
          <Link to={`/add-participant/${tournamentURL}`}>add participant</Link>
        )}
        <button disabled={!isReady}>start tournament</button>
      </ul>
    </div>
  );
}
