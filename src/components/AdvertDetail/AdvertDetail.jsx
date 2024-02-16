import { Card, CardBody, CardFooter, CardHeader,  Image } from '@chakra-ui/react';
import React from 'react';
import { CardHeading,  CardText, PriceSpan, Span, WrapperHeading } from "../AdvertCard/AdvertCard.styled"
import { CardDetails, ImageDetails } from './AdvertDetail.styled';

const AdvertDetails = ({ 
    id,
    year, 
    make, 
    model, 
    img, 
    rentalPrice,
    address,
    rentalCompany, 
    type, mileage, 
    functionalities,
     }) => {
      

  return (

    <>
    <CardDetails>
    <CardHeader>
    <ImageDetails    
    src={img}
    alt={model}/>         
    </CardHeader>
    <CardBody marginBottom={"28px"}>
        <CardHeading>   
            <WrapperHeading>    
            {make}  
            <Span> {model}, </Span> 
            {year}
            </WrapperHeading>     
            <PriceSpan>{rentalPrice}</PriceSpan>
        </CardHeading>  
        <CardText>
            {address}| {rentalCompany}|{type}|{model}|{mileage}|{functionalities}   
        </CardText>  
    </CardBody>
        <CardFooter>
        </CardFooter>      
        </CardDetails>                    
    
        </>
  
  );
};

export default AdvertDetails;