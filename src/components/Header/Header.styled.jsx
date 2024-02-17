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
