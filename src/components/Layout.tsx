import * as React from "react";
import { Route, Switch } from "react-router";
import Main1 from "./Main1";
import Main2 from "./Main2";
import { connect as ModuleConnect } from "react-redux";
import ReactDOM from "react-dom";
import { PrimaryButton } from "@fluentui/react";

export * as libReactRouterDom from "react-router-dom";
export * as libStyledComponent from "styled-components";
export * as libUniversalCookie from "universal-cookie";
export * as libAxios from "axios";
export * as libFluentButton from "@fluentui/react";
export * from "@fluentui/react";
export * as libReactRedux from "react-redux";
export * as libReactDOM from "react-dom";
export * as ReduxReducer from "../redux";
export { ModuleConnect, ReactDOM, PrimaryButton };

interface LayoutProps {}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    return (
      <div className="wrapper">
        <div id="root-page"></div>
        <Main1 />
        {/* <Switch>
          <Route path="/main1" component={Main1} exact />
        </Switch> */}
      </div>
    );
  }
}

export default Layout;
