import { useState } from "react";
import { Link } from "react-router-dom";
import useCreate from "./useCreate";
export default function Creator() {
  const [name, setName] = useState("");

  const { isLoading, handleSubmit } = useCreate(name);

  function handleNameChange(e) {
    setName(e.target.value);
  }

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
