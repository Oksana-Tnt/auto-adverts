import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Container className="container">
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
