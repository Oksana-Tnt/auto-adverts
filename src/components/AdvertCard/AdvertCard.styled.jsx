import { Button, Card, Heading } from "@chakra-ui/react";
import styled from "styled-components";

export const CardHeading = styled(Heading)`
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--primary-black);
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
export const CardAdvert = styled(Card)`
  position: relative;
`;
export const FavoriteButton = styled(Button)`
  position: absolute;
  top: -450px;
  left: 220px;
  width: 40px;
  background-color: transparent;
  border: 0px;
  outline: none;

  .icon-favorite {
    fill: var(--primary-blue);
    width: 18px;
    height: 18px;
  }
`;
