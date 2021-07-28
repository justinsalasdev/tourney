import { useState } from "react";
import { Link } from "react-router-dom";
import useAdd from "./useAdd";
export default function Adder(props) {
  const tournamentURL = props.match.params.url;
  const [name, setName] = useState("");
  const { isLoading, handleSubmit } = useAdd(tournamentURL, name);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  console.log(props.match.params.url);
  return (
    <div>
      <p>This will be the form for adding participant</p>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={handleNameChange} />
        <button>{isLoading ? "---" : "submit"}</button>
      </form>
      <Link to="/tournament">cancel</Link>
    </div>
  );
}
