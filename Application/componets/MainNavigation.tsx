import * as React from "react";

import {routePush} from "../navigation/routePush";
import {registeredRoutes} from "../navigation/registeredRoute";
import {LoginPage} from "../pages/LoginPage";
import {MainPage} from "../pages/MainPage";

export interface IMainNavigationProps extends React.ClassAttributes<any> {
}

export class MainNavigationState {
}

export let mainNavigationState = new MainNavigationState();

export class MainNavigation extends React.Component<IMainNavigationProps,MainNavigationState> {
  constructor(props: IMainNavigationProps, context: any) {
    super(props, context);
    this.props = props;
    this.context = context;
    this.state = mainNavigationState;
  }

  render(): JSX.Element {
    return (
      <nav className="nav has-shadow" id="top">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item" href="../index.html">
              BUHTA
            </a>
          </div>
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab is-active" onClick={()=>routePush(MainPage)}>
              Home
            </a>
            <a className="nav-item is-tab">
              Features
            </a>
            <a className="nav-item is-tab">
              Team
            </a>
            <a className="nav-item is-tab">
              Help
            </a>
        <span className="nav-item">
          <a className="button" onClick={()=>routePush(LoginPage)}>
            Log in
          </a>
          <a className="button is-info">
            Sign up
          </a>
        </span>
          </div>
        </div>
      </nav>
    )
  }

}


