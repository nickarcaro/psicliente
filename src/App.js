import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import AuthProvider from "./providers/AuthProvider";
import { ConfigProvider } from "antd";
import Es from "antd/lib/locale/es_ES";
function App() {
  return (
    <ConfigProvider locale={Es}>
      <AuthProvider>
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))}
          </Switch>
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
}

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
