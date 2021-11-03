import React from "react";
import ReactDOM from "react-dom";
import { Header1 } from "./header";
import { SideBar } from "./sidebar";
import { ProductSide } from "./productside";
import { Footer } from "./footer";
import "./index.css";

ReactDOM.render(
  <div className="shop">
    <Header1></Header1>
    <div className="shop-body">
      <SideBar></SideBar>
      <ProductSide></ProductSide>
    </div>
    <Footer></Footer>
  </div>,
  document.getElementById("root")
);
