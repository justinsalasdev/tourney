import { Link } from "react-router-dom";
import m from "./home.module.sass";

export default function Home() {
  return (
    <div className={m.home}>
      <h3>Tournament manager</h3>
      <p>for single elimination format</p>
      <Link to="/tournament">See tournament</Link>
    </div>
  );
}
