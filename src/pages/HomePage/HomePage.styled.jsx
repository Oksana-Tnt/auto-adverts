import { Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 90px;
    gap: 10px;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 200px;
    gap: 20px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const Title = styled(Heading)`
  font-family: "Manrope-Bold", sans-serif;
  color: var(--primary-blue);
  font-size: 36px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 72px;
  }
`;

export const RentLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  width: 168px;
  background-color: var(--primary-blue);
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  font-family: "Manrope-Bold", sans-serif;
  font-size: 24px;
  line-height: 143%;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    margin-left: 50px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 350px;
  }

  &:hover {
    background-color: var(--active-blue);
  }
`;
