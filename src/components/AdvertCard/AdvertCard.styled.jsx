import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import styled from "styled-components";

export const CardHeading = styled(Heading)`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--primary-black);
`;
export const WrapperImg = styled(CardHeader)`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const WrapperBody = styled(CardBody)`
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const FooterWrapper = styled(CardFooter)`
  display: flex;
  justify-content: center;
`;
export const WrapperHeading = styled.span`
  height: 50px;
`;
export const Span = styled.span`
  color: var(--primary-blue);
`;
export const PriceSpan = styled.span``;
export const CardText = styled.p`
  display: flex;
  margin: 0;
  padding: 0;
  height: 40px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;
export const CardButton = styled.button`
  width: 274px;
  background-color: var(--primary-blue);
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;

  font-weight: 600;
  font-size: 14px;
  line-height: 143%;

  &:hover {
    background-color: var(--active-blue);
  }
`;

export const FavoriteButton = styled(Button)`
  position: absolute;
  top: -470px;
  left: 260px;
  width: 40px;
  background-color: transparent;
  border: 0px;
  outline: none;

  @media screen and (min-width: 1440px) {
    top: -470px;
    left: 230px;
  }
  .icon-favorite {
    fill: var(--primary-blue);
    width: 18px;
    height: 18px;
  }
`;
export const CatalogWrapper = styled(SimpleGrid)`
  display: grid;
  grid-template-columns: repeat(1, minmax(274px, 1fr));
  width: 350px;
  margin-bottom: 30px;
  column-gap: 30px;
  row-gap: 50px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 750px;
    grid-template-columns: repeat(2, minmax(274px, 1fr));
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
    grid-template-columns: repeat(4, minmax(274px, 1fr));
  }
`;
export const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;
