import { Switch, Route } from "react-router-dom";
import Adder from "../Adder/Adder";
import Creator from "../Creator/Creator";
import Home from "../Home/Home";
import Matches from "../Matches/Matches";
import Test from "../Test/Test";
import Tournament from "../Tournament/Tournament";
import { Link } from "react-router-dom";
import m from "./app.module.sass";

function App() {
  return (
    <div className={m.app}>
      <header className={m.header}>
        <Link to="/" className={m.home}>
          Home
        </Link>
      </header>
      <Switch>
        <Route path="/tournament" component={Tournament} />
        <Route path="/create" component={Creator} />
        <Route path="/add-participant/:url" component={Adder} />
        <Route path="/matches/:url" component={Matches} />
        <Route path="/others" component={Test} />
        <Route path="/games">
          <p>GAMES ROUTE</p>
        </Route>
        <Route path="/" component={Home} exact />
      </Switch>
      <footer className={m.footer}>
        Copyright © 2021 Tourney. All rights reserved
      </footer>
    </div>
  );
}

export default App;
