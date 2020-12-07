import React, { lazy, Suspense } from "react";
import { FullPageSpinner } from "components/loaders.js";
import ErrorBoundary from "components/errorBoundary";
import { useUserData } from "contexts/UserContext";
import doAlert from "components/doAlert";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "components/Navbar";

const Summary = lazy(() => import("./pages/Summary"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  const url = process.env.REACT_APP_BASE_URL;
  const { setUserData, dispatch, setLoading } = useUserData();

  React.useEffect(() => {
    fetchUserData();

    function fetchUserData() {
      setLoading(true);

      fetch(url)
        .then(response => response.json())
        .then(data => {
          setUserData(data);
          dispatch({
            type: "INIT",
            payload: {
              items: data.items
            }
          });
          setLoading(false);
        })
        .catch(err => {
          doAlert("ooops! unable to fetch user data", "error");
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<FullPageSpinner />}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/summary" component={Summary} />
            <Route path="*" component={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
