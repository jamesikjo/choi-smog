import React from "react";
import Footer from "./Footer";
import MainHeader from "./MainHeader";
import NavBar from "./NavBar";

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
