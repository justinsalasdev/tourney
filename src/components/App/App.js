import { Switch, Route } from "react-router-dom";
import Adder from "../Adder/Adder";
import Creator from "../Creator/Creator";
import Matches from "../Matches/Matches";
import Test from "../Test/Test";
import Tournament from "../Tournament/Tournament";
import m from "./app.module.sass";

function App() {
  return (
    <div className={m.app}>
      <header>Nav bar</header>
      <Switch>
        <Route path="/tournament" component={Tournament} />
        <Route path="/create" component={Creator} />
        <Route path="/add-participant/:url" component={Adder} />
        <Route path="/matches/:url" component={Matches} />
        <Route path="/others" component={Test} />
        <Route path="/games">
          <p>GAMES ROUTE</p>
        </Route>
        <Route path="/" exact>
          <div>HOME ROUTE</div>
        </Route>
      </Switch>
      <footer>footer footer footer</footer>
    </div>
  );
}

export default App;
