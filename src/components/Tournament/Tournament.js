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
    return <div>..loading..</div>;
  }

  return (
    <div className={m.tournament}>
      <p>This is the tournaments page</p>
      <Participants tournamentURL={tournament.id} />
      <Link to="/create">create tournament</Link>
    
      <Link to="/matches/99ggasdfas">Show matches</Link>
    </div>
  );
}

//when rendered --> fetch tournaments
//get id tournament
