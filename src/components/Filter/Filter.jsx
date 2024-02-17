import React from "react";
import Select from "react-select";
import carsBrand from "../../components/db/casrBrand.json";
import { useDispatch } from "react-redux";
import { filterAdverts } from "../../redux/advertsSlice";
import { CardButton } from "../AdvertCard/AdvertCard.styled";

const Filter = () => {
  const dispatch = useDispatch();
  //const filterName = useSelector(getFilter);

  const handleInput = ({ value }) => {
    dispatch(filterAdverts(value));
  };

  const handleReset = () => {
    dispatch(filterAdverts(""));
  };
  const handleFilter = () => {};
  return (
    <>
      <Select options={carsBrand} onChange={handleInput} />
      <CardButton onClick={handleFilter}>Search</CardButton>
      <CardButton onClick={handleReset}>Reset</CardButton>
    </>
  );
};

export default Filter;
