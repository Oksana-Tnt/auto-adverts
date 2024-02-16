import { CardBody, CardFooter, CardHeader, Image } from "@chakra-ui/react";
import { CardButton, CardHeading, CardText, FavoriteButton, PriceSpan, Span, WrapperHeading } from "../AdvertCard/AdvertCard.styled";
import Icon from "../Icon/Icon";

const FavoriteItem = ({
  favoriteAdvert,
  removeFavoriteById,
}) => {
  const { id, year, make, model, img, rentalPrice, address, rentalCompany, type, mileage, functionalities} = favoriteAdvert;

  return (
    <>
    <CardHeader>
         <Image
    boxSize='274px'
    objectFit='cover'
    borderRadius="14px"
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
        <CardButton>Learn More</CardButton>
        </CardFooter>
        
        <FavoriteButton type="button" onClick={() => removeFavoriteById(id)}>
        <Icon className="icon-favorite" id="active"/>
      </FavoriteButton>       
    </>
  
  );
};

export default FavoriteItem;