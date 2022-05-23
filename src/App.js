
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { clientRoutes } from "routes/routes";
import ClientLayout from 'layouts/ClientLayout';


function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map((route) => {
      const { path, component, exact, isPrivate } = route;
      return (
        <Layout
          path={path}
          component={component}
          exact={exact}
          isPrivate={isPrivate}
        />
      );
    });
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          {renderLayout(clientRoutes,ClientLayout)}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
