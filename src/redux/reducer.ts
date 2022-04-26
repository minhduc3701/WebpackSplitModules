class storeState {
  value: string = "";
}

const Test = (state: storeState, action: any): any => {
  switch (action.type) {
    case "TEST1":
      console.log("in test 1");
      break;

    default:
      break;
  }
};
export default Test;
