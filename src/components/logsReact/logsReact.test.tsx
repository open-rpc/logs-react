import React from "react";
import ReactDOM from "react-dom";
import JSONRPCLogger, { IJSONRPCLog } from "./logsReact";

const basicLogs: IJSONRPCLog[] = [{
  type: "request",
  method: "test",
  timestamp: new Date(),
  payload: {},
}];

describe("logsReact", () => {

  it("renders base component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<JSONRPCLogger
      logs={basicLogs}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders component drawer closed", () => {
    const div = document.createElement("div");
    ReactDOM.render(<JSONRPCLogger
      logs={basicLogs}
      sidebarOpen={false}
    />, div);
    expect(div.innerHTML.includes("hidden")).toBe(true);
    ReactDOM.unmountComponentAtNode(div);
  });
});
