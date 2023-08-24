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

//React.createElement ==> Object ==> HTML(DOM)

const heading2 = React.createElement(
  "h2",
  { id: "title", key: "12" },
  "Hello Everyone by parcel!"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

const container2 = React.createElement("div", { key: "13" }, [
  React.createElement("h1", { key: "14" }, "Hello Everyone by Complex!"),
  React.createElement("ul", { key: "15" }, [
    React.createElement("li", { key: "16" }, "Hello Everyone by li!"),
    React.createElement("li", { key: "17" }, "Hello Everyone by li!"),
    React.createElement("li", { key: "17" }, "Hello Everyone by li!"),
  ]),
]);

//JSX ==> React.createElement ==> Object ==> HTML(DOM)
//babel is converting this jsx to above code react.createelement
const heading3 = (
  <h1 id="title3" key="h3">
    Hello React
  </h1>
);
const Title = () => <h1 key="t1">Hello React</h1>;

//react component
// functional - new
// class based component - old

//name of component starts with a capital letter - convention
// jsx does sanitization- it secures from cross site scripting
//composing components- components insid components
const HeaderComponent = () => {
  return (
    <div>
      {heading3}
      <Title />
      {Title()}
      <h1>Hello react functional component</h1>
      <h2>this is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
// root.render(container2); // react element
root.render(<HeaderComponent />); // react functional component
