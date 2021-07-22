import { Switch, Route } from "react-router-dom";
import Creator from "../Creator/Creator";
import Test from "../Test/Test";
import m from "./app.module.sass";

function App() {
  return (
    <div className={m.app}>
      <header>this is the header</header>
      <Switch>
        <Route path="/creator" component={Creator} />
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
