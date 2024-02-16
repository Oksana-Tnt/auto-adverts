import {
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { CardText, Span } from "../AdvertCard/AdvertCard.styled";
import {
  AccessoriesList,
  CardDescription,
  CardDetails,
  Conditions,
  DescriptionsHeading,
  ImageDetails,
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
          <Conditions>fgdgfd</Conditions>
        </CardBody>
        <CardFooter></CardFooter>
      </CardDetails>
    </>
  );
};

export default AdvertDetails;
