import React from "react";
import ReactDOM from "react-dom";
import MethodList from "./methodList";
import {IJSONRPCLog} from "../logsReact/logsReact";

const basicLogs: IJSONRPCLog[] = [
  {
    type: "request",
    method: "test",
    timestamp: new Date(),
    payload: {},
  },
  {
    type: "request",
    method: "test1",
    timestamp: new Date(),
    payload: {},
  },
  {
    type: "request",
    method: "test4",
    timestamp: new Date(),
    payload: {},
  },
];

describe("methodList", () => {

  it("renders base component", () => {
    const div = document.createElement("div");
    const select = () => {
      return;
    };
    const close = () => {
      return;
    };
    ReactDOM.render(<MethodList
      logs={basicLogs}
      alignment="left"
      active={["all"]}
      select={select}
      isDrawerOpen={true}
      closeDrawer={select}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("add new filter", () => {
    const div = document.createElement("div");
    const select = () => {
      return;
    };
    const close = () => {
      return;
    };
    ReactDOM.render(<MethodList
      logs={basicLogs}
      alignment="left"
      active={["all"]}
      select={select}
      isDrawerOpen={true}
      closeDrawer={select}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("drawerCLosed", () => {
    const div = document.createElement("div");
    const select = () => {
      return;
    };
    const close = () => {
      return;
    };
    ReactDOM.render(<MethodList
      logs={basicLogs}
      alignment="left"
      active={["all"]}
      select={select}
      isDrawerOpen={false}
      closeDrawer={select}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
