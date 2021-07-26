import { Link } from "react-router-dom";

export default function Tournament() {
  //get tournaments data
  //tournament URL

  return (
    <div>
      <p>This is the tournaments page</p>
      <Link to="/create">create tournament</Link>
      <Link to="/add-participant/99ggasdfas">add participant</Link>
      <Link to="/matches/99ggasdfas">Show matches</Link>
      <button>start tournament</button>
    </div>
  );
}

//when rendered --> fetch tournaments
//get id tournament
