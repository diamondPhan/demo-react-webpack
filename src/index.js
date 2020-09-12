import React from "react";
import ReactDOM from "react-dom";
import Helloworld from "./component/Helloworld"

const Index = () => {
  return (
    <div>
     
      <Helloworld/>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
