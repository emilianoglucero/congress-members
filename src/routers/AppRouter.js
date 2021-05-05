import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CongressDetailScreen } from "../components/CongressDetailScreen";
import { CongressListScreen } from "../components/CongressListScreen";

import { SearchScreen } from "../components/SearchScreen";
import { useFetch } from "../hooks/useFetch";

export const AppRouter = () => {
  const url = "https://api.propublica.org/congress/v1/102/house/members.json";

  const { loading, data, error } = useFetch(url);
  console.log(loading);
  console.log(error);
  console.log(data);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/search">Search</Link>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/search">
                  <SearchScreen listOfMembers={data} />
                </Route>
                <Route path="/congress/:congressId">
                  <CongressDetailScreen listOfMembers={data} />
                </Route>
                <Route path="/">
                  <CongressListScreen listOfMembers={data} />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      )}
    </>
  );
};
