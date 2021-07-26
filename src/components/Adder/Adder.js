import { Link } from "react-router-dom";
export default function Adder(props) {
  console.log(props.match.params.url);
  return (
    <div>
      <p>This will be the form for adding participant</p>
      <button>submit</button>
      <Link to="/tournament">cancel</Link>
    </div>
  );
}
