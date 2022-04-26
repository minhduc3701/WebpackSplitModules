import * as React from "react";
import defaultDOM from "../modules";

interface Main1Props {}

interface Main1State {}

// const DOMrender = ReactDOM.render;

// const { connect } = libReactRedux;

class Main1 extends React.Component<Main1Props, Main1State> {
  render() {
    return (
      <div className="page-Main">
        <h1>Main1</h1>
        <defaultDOM.PrimaryButton text="Test Library import from Layout" />
      </div>
    );
  }
}

// const mapStateToProps = (state: any) => {
//   console.log(state);
//   return {
//     value: state.Test.value,
//   };
// };

// const LayoutContainer = ModuleConnect(mapStateToProps, null)(Main1);
export default Main1;
