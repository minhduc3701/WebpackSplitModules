import * as React from "react";
import { libFluentButton, libReactDOM, ReactDOM } from "./Layout";
import parse from "html-react-parser";

interface Main2Props {}

interface Main2State {}

class Main2 extends React.Component<Main2Props, Main2State> {
  render() {
    return <div className="page-Main">{parse(`<h1>using parse</h1>`)}</div>;
  }
}

export default Main2;
ReactDOM.render(<Main2 />, document.getElementById("root-page"));
