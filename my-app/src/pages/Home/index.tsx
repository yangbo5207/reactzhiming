import React from 'react';
import {BrowserRouter, Switch, Link, Route, useRouteMatch} from 'react-router-dom';
import logo from './logo.svg';
import './index.css';

interface MatchLinkProps {
  to: string,
  label?: string,
  activeOnlyWhenExact?: boolean
}

function MatchLink(props: MatchLinkProps) {
  const {label, to, activeOnlyWhenExact} = props;
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  })

  const cls = match ? 'active' : '';

  return (
    <Link to={to}>
      <div className={cls}>{label}</div>
    </Link>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="sidebar">
          <div className="header">
            <img src={logo} alt="" />
            <div>React 知命境</div>
          </div>
          <div className="nav">
            <MatchLink to="/" label="React 基础" />
            <MatchLink to="/hooks" label="React hooks" />
            <MatchLink to="/router" label="React router" />
            <MatchLink to="/redux" label="React redux" />
            <MatchLink to="/mobx" label="React mobx" />
            <MatchLink to="/typescript" label="typescript" />
            <MatchLink to="/practice" label="practice" />
          </div>
        </div>

        <div className="content">
          <Switch>
            <Route path="/hooks">
              React hooks
            </Route>
            <Route path="/router">
              React router
            </Route>
            <Route path="/redux">
              React redux
            </Route>
            <Route path="/mobx">
              React mobx
            </Route>
            <Route path="/typescript">
              React + Typescript
            </Route>
            <Route path="/practice">
              React practice
            </Route>
            <Route path="/">
              React 基础
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;