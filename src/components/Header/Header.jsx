import React from "react";
import { Breadcrumb, BreadcrumbItem, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CurrentLink, HeaderWrapper } from "./Header.styled";
import Icon from "../Icon/Icon";

const Header = () => {
  return (
    <Container centerContent>
      <HeaderWrapper>
        <Link to={"/"}>
          <Icon className="icon-logo" id="logo" />
        </Link>
        <Breadcrumb>
          <BreadcrumbItem>
            <CurrentLink as={Link} to="/">
              Home
            </CurrentLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <CurrentLink as={Link} to="/catalog">
              Catalog
            </CurrentLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <CurrentLink as={Link} to="/favorite">
              Favorite
            </CurrentLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
