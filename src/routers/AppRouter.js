import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CongressDetailScreen } from "../components/CongressDetailScreen";
import { CongressListScreen } from "../components/CongressListScreen";

import { SearchScreen } from "../components/SearchScreen";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { useFetch } from "../hooks/useFetch";
import "../styles/navbar.scss";

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
            <Header />
            <div>
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
          <Footer />
        </div>
      )}
    </>
  );
};
