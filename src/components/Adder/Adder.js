import { useState } from "react";
import { Link } from "react-router-dom";
import useAdd from "./useAdd";
import m from "./adder.module.sass";
export default function Adder(props) {
  const tournamentURL = props.match.params.url;
  const [name, setName] = useState("");
  const { isLoading, handleSubmit } = useAdd(tournamentURL, name);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  console.log(props.match.params.url);
  return (
    <div className={m.container}>
      <h3>ADD PARTICIPANT</h3>
      <form onSubmit={handleSubmit} className={m.form}>
        <input placeholder="Name" value={name} onChange={handleNameChange} />
        <button>{isLoading ? "---" : "submit"}</button>
      </form>
      <Link to="/tournament">cancel</Link>
    </div>
  );
}
