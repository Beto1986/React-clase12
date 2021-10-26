import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jugador from "./components/Jugador/Jugador";
import { Edad } from "./components/Edad/Edad";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                alt="Fifa"
                src="data:image/png;base64,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"
                width="100"
                height="50"
              />
            </Link>
          </li>
          <li>
            <Link to="/usuarios">Usuarios</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route exact path="/usuarios">
          <h1>Usuarios</h1>
        </Route>
        <Route exact path="/usuario/:idJugador">
          <Jugador />
        </Route>
        <Route exact path="/jugador/:edad">
          <Edad />
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}
