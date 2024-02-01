import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./RootLayout.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const mainRootStyles = isOpen ? { overflow: "hidden" } : {};

  return (
    <div className="main-root" style={mainRootStyles}>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
