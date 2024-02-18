import { BreadcrumbLink } from "@chakra-ui/react";
import styled from "styled-components";

export const CurrentLink = styled(BreadcrumbLink)`
  font-size: 16px;
  color: #324574;
  text-decoration-color: transparent;
  &:hover,
  &:focus {
    color: var(--active-blue);
    text-decoration-color: var(--active-blue);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;
export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 999;
  width: 100%;
  height: 80px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding-left: 50px;
    padding-right: 50px;
    height: 50px;
    padding-top: 5px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    height: 100px;
  }

  .icon-logo {
    width: 100px;
    height: 80px;

    @media screen and (min-width: 768px) {
      margin-top: -20px;
      width: 100px;
      height: 100px;
    }
    @media screen and (min-width: 1440px) {
      margin-top: -20px;
      width: 150px;
      height: 150px;
    }
  }
`;
