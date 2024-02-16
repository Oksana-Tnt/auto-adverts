import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,

} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { CurrentLink } from './Header.styled';

const Header = ({ showModal }) => {
  return (
    <Breadcrumb>
  <BreadcrumbItem>
    <CurrentLink as={Link} to='/' >Home</CurrentLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <CurrentLink as={Link} to='/catalog'>Catalog</CurrentLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <CurrentLink as={Link} to='/favorite'>Favorite</CurrentLink>
  </BreadcrumbItem>
</Breadcrumb>
  );
};

export default Header;
