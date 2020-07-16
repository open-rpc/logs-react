import React from "react";
import ReactDOM from "react-dom";
import { IJSONRPCLog } from "../logsReact/logsReact";
import CardListItem from "./cardListItem";

const basicLog: IJSONRPCLog = {
  type: "request",
  method: "test",
  timestamp: new Date(),
  payload: {},
};

describe.only("CardListItem", () => {

  it("renders component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CardListItem
      log={basicLog}
      filter={["all"]}
      open={true}
    />, div);
  });

});
