import React from "react";
import { createRoot } from "react-dom/client";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Component created!");
  }

  render () { // Ini Wajib dilakukan, untuk mengembalikan UI (React element) yang akan ditampilkan
    return <p>Hello, {this.props.name}!</p>;
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <MyComponent name="Latihan" />
    <MyComponent name="Class" />
    <MyComponent name="Component" />
  </div>  
);
