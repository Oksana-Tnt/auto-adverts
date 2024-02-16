import { Card, Heading, Image, List } from "@chakra-ui/react";
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
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: var(--secondary-black);
`;
