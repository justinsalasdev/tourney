import { Link } from "react-router-dom";
export default function Matches(props) {
  //this page will receive tournament Id
  console.log(props.match.params.url);

  return (
    <div>
      <p>This page will show matches</p>
      <li>Match 1</li>
      <li>Match 2</li>
      <li>Match 3</li>
      <Link to="/tournament">back to tournament</Link>
    </div>
  );
}
