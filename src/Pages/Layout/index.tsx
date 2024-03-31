import React from "react";
import { Outlet } from "react-router-dom";
import MainWrapper from "./styled";
import Header from "../../Widgets/Header/Header";
import Footer from "../../Widgets/Footer/footer";

function Layout() {
  const [count, setCount] = React.useState(0);
  return (
    <MainWrapper>
      <Header item={count}/>
      <Outlet context={[count, setCount]}/>
      <Footer />
    </MainWrapper>
  );
}

export default Layout;
