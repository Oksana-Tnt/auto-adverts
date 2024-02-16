import { BreadcrumbLink } from '@chakra-ui/react';
import styled from 'styled-components';

export const CurrentLink=styled(BreadcrumbLink)`
    &:hover,
    &:focus{
        color: red;
    }
`