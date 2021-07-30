import { Link } from "react-router-dom";
import m from "./tournament.module.sass";
import useFetch from "./useFetch";
import Participants from "../Participants/Participants";
import useUpdate from "./useUpdate";

export default function Tournament() {
  const { isLoading, tournament } = useFetch();
  const { isUpdateLoading, handleUpdate } = useUpdate(tournament?.id);

  //get tournaments data
  //tournament URL
  console.log(isLoading, tournament);

  if (isLoading) {
    return (
      <div className={m.tournament}>
        <div className={m.loader}>..loading..</div>
      </div>
    );
  }

  if (!isLoading && !tournament) {
    return (
      <div className={m.tournament}>
        <Link to="/create" className={m.creator}>
          create tournament
        </Link>
      </div>
    );
  }

  return (
    <div className={m.tournament}>
      <div className={m.info}>
        <p className={m.title}>{tournament.attributes.name}</p>
        <p className={m.desc}>about this tournament</p>
      </div>

      <Participants tournamentURL={tournament.id} handleUpdate={handleUpdate} />

      <div className={m.links}>
        <button onClick={handleUpdate("finalize")}>Finalize</button>
        <button onClick={handleUpdate("reset")}>Reset</button>
        <Link to={`/matches/${tournament.id}`}>Go to matches</Link>
        <Link to="/create" className={m.creator}>
          New tournament
        </Link>
      </div>
    </div>
  );
}

//when rendered --> fetch tournaments
//get id tournament
