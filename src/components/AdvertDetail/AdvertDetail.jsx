import { CardBody, CardHeader, Heading, ListItem } from "@chakra-ui/react";
import React from "react";
import { CardText, Span } from "../AdvertCard/AdvertCard.styled";
import {
  AccessoriesList,
  ButtonWrapper,
  CardDescription,
  CardDetails,
  Conditions,
  DescriptionsHeading,
  ImageDetails,
  RentButton,
  SpanConditions,
  SpanConditionsAccent,
} from "./AdvertDetail.styled";

const AdvertDetails = ({ advert }) => {
  const {
    id,
    year,
    make,
    model,
    fuelConsumption,
    address,
    engineSize,
    type,
    description,
    functionalities,
    mileage,
    rentalPrice,
  } = advert;
  const { img } = advert;
  return (
    <>
      <CardDetails key={id}>
        <CardHeader>
          <ImageDetails src={img} alt={model} />
        </CardHeader>
        <CardBody marginBottom={"28px"}>
          <Heading>
            {make}
            <Span> {model}, </Span>
            {year}
          </Heading>
          <CardText>
            {address}|id:{id}|year:{year}|type:{type}|FuelConsumption
            {fuelConsumption}|engineSize:{engineSize}
          </CardText>
          <CardDescription>{description}</CardDescription>
          <DescriptionsHeading>
            Accessories and functionalities:
          </DescriptionsHeading>
          <AccessoriesList>
            {functionalities?.map((item) => (
              <ListItem>{item} | </ListItem>
            ))}
          </AccessoriesList>
          <DescriptionsHeading>Rental Conditions:</DescriptionsHeading>
          <Conditions>
            <SpanConditions>Minimum age:</SpanConditions>
            <SpanConditionsAccent>25</SpanConditionsAccent>
            <SpanConditions>valid driver license</SpanConditions>
            <SpanConditions>Security deposite required </SpanConditions>
            <SpanConditions>mileage</SpanConditions>
            <SpanConditionsAccent>{mileage}</SpanConditionsAccent>
            <SpanConditions>Price</SpanConditions>
            <SpanConditionsAccent>{rentalPrice}</SpanConditionsAccent>
          </Conditions>
        </CardBody>
        <ButtonWrapper>
          <RentButton>Rental car</RentButton>
        </ButtonWrapper>
      </CardDetails>
    </>
  );
};

export default AdvertDetails;
