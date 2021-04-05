import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import ThemeContext from "./components/ThemeContext";

const COLORS = [
  "#ad343e",
  "#252525",
  "#00303f",
  "darkblue",
  "peru",
  "chartreuse",
  "mediumorchid",
];

const App = () => {
  const themeHook = useState(COLORS); //pick favorite color in useState

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <main>
            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <SearchParams COLORS={COLORS} />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
