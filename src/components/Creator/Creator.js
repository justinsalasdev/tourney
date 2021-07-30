import { useState } from "react";
import { Link } from "react-router-dom";
import useCreate from "./useCreate";
import m from "./creator.module.sass";
export default function Creator() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const { isLoading, handleSubmit } = useCreate(name, desc);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  return (
    <div className={m.container}>
      <h3>CREATE TOURNAMENT</h3>
      <form onSubmit={handleSubmit} className={m.form}>
        <input placeholder="Name" value={name} onChange={handleNameChange} />
        <input
          placeholder="Description"
          value={desc}
          onChange={handleDescChange}
        />
        <button>{isLoading ? "---" : "submit"}</button>
      </form>
      <Link to="/tournament">cancel</Link>
    </div>
  );
}
