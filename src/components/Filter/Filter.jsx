import React, { useRef, useState } from "react";
import Select from "react-select";
import carsBrand from "../../components/db/casrBrand.json";
import carsPrice from "../../components/db/carsPrice.json";
import { useDispatch } from "react-redux";

import {
  ButtonWrapper,
  HeaderContainer,
  MakeContainer,
  PriceContainer,
  SelectorButton,
  SelectorWrapper,
  Wrapper,
} from "./Filter.style";
import { Container } from "@chakra-ui/react";
import { setFilters } from "../../redux/adverts/advertsSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const [filterMake, setFilterMake] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  let filters = [];
  filters.push(filterMake);
  filters.push(filterPrice);

  const handleMakeInput = ({ value }) => {
    setFilterMake(value);
  };

  const handlePriceInput = ({ value }) => {
    setFilterPrice(value);
  };
  console.log(filters);
  const handleFilter = () => {
    dispatch(setFilters(filters));
  };
  const handleReset = () => {
    dispatch(setFilters([]));
    filters = [];
    setFilterMake("");
    setFilterPrice("");
  };
  return (
    <>
      <Container bg="blue.600" centerContent>
        <SelectorWrapper>
          <Wrapper>
            <MakeContainer>
              <HeaderContainer>Card brand</HeaderContainer>
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: "48px",
                    borderRadius: "14px",
                  }),
                }}
                options={carsBrand}
                onChange={handleMakeInput}
              />
            </MakeContainer>
            <PriceContainer>
              <HeaderContainer>Price/ 1 hour</HeaderContainer>
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: "48px",
                    borderRadius: "14px",
                  }),
                }}
                options={carsPrice}
                onChange={handlePriceInput}
              />
            </PriceContainer>
          </Wrapper>
          <ButtonWrapper>
            <SelectorButton onClick={handleFilter}>Search</SelectorButton>
            <SelectorButton onClick={handleReset}>Reset</SelectorButton>
          </ButtonWrapper>
        </SelectorWrapper>
      </Container>
    </>
  );
};

export default Filter;
