import React from "react";
import ProductContainer from "./ProductContainer";

const App = () => {

  const appStyle = {
    fontFamily: "Arial",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh"
  };

  return (
    <div style={appStyle}>
      <ProductContainer />
    </div>
  );
};

export default App;
