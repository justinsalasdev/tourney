import { Link } from "react-router-dom";
import m from "./tournament.module.sass";
import useFetch from "./useFetch";
import Participants from "../Participants/Participants";

export default function Tournament() {

  const { isLoading, tournament } = useFetch();

  
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

      <Participants tournamentURL={tournament.id} />

      <div className={m.links}>
        <Link to={`/matches/${tournament.id}`}>Go to matches</Link>
      </div>
    </div>
  );
}

//when rendered --> fetch tournaments
//get id tournament
