import React from "react";
import "./GlobalStyle.scss";

//interface Props {}


const GlobalStyle = (props: React.PropsWithChildren) => {
  return <div>{props.children}</div>;
};

export default GlobalStyle;
