import React from 'react';
import {BrowserRouter, Switch, Link, Route, useRouteMatch} from 'react-router-dom';
import logo from './logo.svg';

import Basic from '../base'

import './index.css';

interface MatchLinkProps {
  to: string,
  label?: string,
  activeOnlyWhenExact?: boolean,
  tip?: string
}

function MatchLink(props: MatchLinkProps) {
  const {label, to, activeOnlyWhenExact, tip} = props;
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  })

  const cls = match ? 'nav-item active' : 'nav-item';

  return (
    <Link className={cls} to={to}>
      <div className="container">
        <div className="nav-title">
          <span className="icon"></span>
          <span className="h1tt">{label}</span>
        </div>
        <div className="tip">{tip}</div>
      </div>
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
            <div className="title">React 知命境</div>
          </div>
          <div className="nav">
            <MatchLink to="/" activeOnlyWhenExact label="basic" tip="所有基础知识" />
            <MatchLink to="/hooks" label="hooks" tip="组件化新方案" />
            <MatchLink to="/router" label="router" tip="页面路由方案" />
            <MatchLink to="/redux" label="redux" tip="状态管理方案" />
            <MatchLink to="/mobx" label="mobx" tip="状态管理方案" />
            <MatchLink to="/typescript" label="TS" tip="类型约束升级" />
            <MatchLink to="/practice" label="practice" tip="各种练习项目" />
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
            <Route path="/" component={Basic} />
          </Switch>
        </div>

        <div>介绍内容</div>
      </div>
    </BrowserRouter>
  );
}

export default App;