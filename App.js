/*
created a server
HMR- hot module replacement
file watcher algorithm - C++
building
minify 
cleaning our code
dev and production build
super fast build algorithm
image optimization
caxhing while development
compression
compatible with older version of browser
HTTPS on dev
port number
consistent hashing algoritm
zero config
tree shakin g- removing unwanted code

transitive dependencies

*/

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "11",
  },
  "Hello Everyone by react!"
);
const heading2 = React.createElement(
  "h2",
  { id: "title", key: "12" },
  "Hello Everyone by parcel!"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
