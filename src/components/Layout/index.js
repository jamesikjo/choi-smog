import React from "react";
import MainHeader from "./../../MainHeader/index";
import NavBar from "./../NavBar/index";
import Footer from "./../../Footer/index";

const Layout = ({ children }) => {
  return (
    //div style for sticky footer
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <MainHeader />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
