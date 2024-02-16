import { CardBody, CardFooter, CardHeader,  Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CardButton, CardHeading,  CardText, FavoriteButton, PriceSpan, Span, WrapperHeading } from './AdvertCard.styled';
import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';
import AdvertDetails from '../AdvertDetail/AdvertDetail';



const AdvertCard = ({ 
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
    addFavorite,
    removeFavorite,
    isFavorite, }) => {

      
    const [visible, setVisible] = useState(false);

    const toggleModal = () => {
        setVisible(!visible);
    };
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
        <CardButton  type= "button" onClick={toggleModal}>Learn More</CardButton>
        </CardFooter>
        
        {!isFavorite ? (
          <FavoriteButton type="button" onClick={()=>addFavorite(id)}>
         <Icon className="icon-favorite" id="normal"/>
          </FavoriteButton>
        ) : (

          <FavoriteButton type="button" onClick={() => removeFavorite(id)}>
            <Icon className="icon-favorite" id="active"/>
          </FavoriteButton>
        )}    
        
        {visible && (
              <Modal setVisible={toggleModal} >
             <AdvertDetails
              id={id}
              year={year} 
              make={make} 
              model={model} 
              img={img} 
              rentalPrice={rentalPrice} 
              address={address} 
              rentalCompany={rentalCompany}
              typer={type}
              mileage={mileage}
              functionality={functionalities}/>
              </Modal>
            )}
                      
    
        </>
  
  );
};

export default AdvertCard;