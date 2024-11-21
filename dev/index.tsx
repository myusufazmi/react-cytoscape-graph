import React from "react";
import ReactDOM from "react-dom";
import { CytoscapeGraph } from "../src/CytoscapeGraph";

const App = () => (
  <div>
    <h1>Testing Cytoscape Graph Component</h1>
    <CytoscapeGraph
      elements={{
        nodes: [
          { data: { id: "a", label: "A" } },
          { data: { id: "b", label: "B" } },
        ],
        edges: [{ data: { id: "ab", source: "a", target: "b", label: "AB" } }],
      }}
      style={[]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
