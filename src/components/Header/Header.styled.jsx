import { BreadcrumbLink } from "@chakra-ui/react";
import styled from "styled-components";

export const CurrentLink = styled(BreadcrumbLink)`
  font-size: 24px;
  color: var(--primary-blue);
  &:hover,
  &:focus {
    color: var(--active-blue);
  }
`;
export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  height: 120px;
  justify-content: space-between;
  align-items: center;

  .icon-logo {
    width: 170px;
    height: 170px;
  }
`;
export const HomePageWrapper = styled.div`
  height: 100vh;
`;
