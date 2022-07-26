import { Fragment } from "react";
import Header from "../Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="w-full h-full my-10 p-1 flex justify-center items-center">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
