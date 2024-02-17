import { Card, CardFooter, Heading, Image, List } from "@chakra-ui/react";
import styled from "styled-components";

export const WrapperHeadingDetail = styled.span``;
export const CardDetails = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImageDetails = styled(Image)`
  width: 461px;
  object-fit: cover;
  border-radius: 14px;
`;
export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 143%;
  margin-bottom: 24px;
`;
export const DescriptionsHeading = styled(Heading)`
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
`;
export const AccessoriesList = styled(List)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 24px;
  padding: 0;

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;
export const Conditions = styled.p`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: var(--secondary-black);
`;
export const RentButton = styled.div`
  display: flex;
  justify-content: center;
  width: 168px;
  background-color: var(--primary-blue);
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
`;
export const ButtonWrapper = styled(CardFooter)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
export const SpanConditions = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: var(secondary-black);
`;
export const SpanConditionsAccent = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: var(--primary-blue);
`;
