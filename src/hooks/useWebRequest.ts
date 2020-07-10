import { useState, useEffect } from "react";
import { IJSONRPCLog } from "../components/logsReact/logsReact";

var batchIdCount = 0;

// checks if the passed string is a JSON-RPC request or response
const isJsonRpc = (str: string) => {
  try {
    const json = JSON.parse(str);
    if (json) {
      // Currently on returns batched request if all items are JSONRPC calls
      if (json.length > 0) {
        for (const obj of json) {
          if (!("jsonrpc" in obj)) {
            return false;
          }
        }
        return true;
      }
      else if ("jsonrpc" in json) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  } catch (e) {
    return false;
  }
};

const useWebRequest = () => {
  const [history, setHistory] = useState<IJSONRPCLog[]>([]);
  const listener = (request) => {
    const requestBody = request.request.postData?.text;
    request.getContent((responseBody) => {
      if (request.request && request.request.url && requestBody
        && isJsonRpc(requestBody) && isJsonRpc(responseBody)) {
        const requestBodyObj = JSON.parse(requestBody);
        const requestObjs: IJSONRPCLog[] = [];
        const responseObjs: IJSONRPCLog[] = [];
        //if batched
        if (requestBodyObj.length) {
          for (var i = 0; i < requestBodyObj.length; i++) {
            requestObjs.push(
              {
                type: "request",
                method: requestBodyObj[i].method,
                timestamp: new Date(request.startedDateTime),
                payload: requestBodyObj[i],
                batchId: batchIdCount,
              }
            );
          }
          batchIdCount += 1;
        } else {
          requestObjs.push(
            {
              type: "request",
              method: requestBodyObj.method,
              timestamp: new Date(request.startedDateTime),
              payload: requestBodyObj,
            }
          );
        }

        const responseTime = new Date(request.startedDateTime);
        const responseBodyObj = JSON.parse(responseBody);
        responseTime.setMilliseconds((responseTime.getMilliseconds() + request.time));
        //if batched
        if (responseBodyObj.length) {
          for (var i = 0; i < responseBodyObj.length; i++) {
            responseObjs.push(
              {
                type: "response",
                method: requestBodyObj[i].method,
                timestamp: responseTime,
                payload: responseBodyObj[i],
                batchId: batchIdCount,
              }
            );
          }
          batchIdCount += 1;
        } else {
          responseObjs.push(
            {
              type: "response",
              method: requestBodyObj.method,
              timestamp: responseTime,
              payload: responseBodyObj,
            }
          );

        }
        setHistory((prevHistory) => [...prevHistory, ...requestObjs, ...responseObjs]);
      }
    });
  };
  useEffect(() => {
    if (chrome && chrome.webRequest) {
      chrome.devtools.network.onRequestFinished.addListener(listener);
    }
    return function cleanup() {
      chrome.devtools.network.onRequestFinished.removeListener(listener);
    };
  }, []);

  return [history];
};

export default useWebRequest;
