import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import m from "./participants.module.sass";

export default function Participants({ tournamentURL }) {
  const { participants, isLoading } = useFetch(tournamentURL);

  const isAdd = participants.length < 8;
  const isReady = participants.length > 1 && participants.length % 2 === 0;

  if (isLoading) {
    return <div>..loading participants...</div>;
  }

  return (
    <div className={m.participants}>
      <ul className={m.list}>
        {participants.map((participant) => {
          return (
            <li className={m.item} key={participant.id}>
              {participant.attributes.name}
            </li>
          );
        })}
      </ul>
      <div className={m.actions}>
        {isAdd && (
          <Link to={`/add-participant/${tournamentURL}`}>add participant</Link>
        )}
        <button disabled={!isReady}>start tournament</button>
      </div>
    </div>
  );
}
