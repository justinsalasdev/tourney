import { Link } from "react-router-dom";
export default function Creator() {
  return (
    <div>
      <p>This form creates a tournament</p>
      <button>submit</button>
      <Link to="/tournament">cancel</Link>
    </div>
  );
}