import { Image } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CardButton,
  CardHeading,
  CardText,
  FavoriteButton,
  FooterWrapper,
  PriceSpan,
  Span,
  WrapperBody,
  WrapperHeading,
  WrapperImg,
} from "./AdvertCard.styled";
import Icon from "../Icon/Icon";
import Modal from "../Modal/Modal";
import AdvertDetails from "../AdvertDetail/AdvertDetail";

const AdvertCard = ({ advert, addFavorite, removeFavorite, isFavorite }) => {
  const {
    id,
    year,
    make,
    model,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = advert;
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const { img } = advert;
  return (
    <>
      <WrapperImg>
        <Image
          alignSelf={"center"}
          boxSize="274px"
          objectFit="cover"
          borderRadius="14px"
          src={img}
          alt={model}
        />
      </WrapperImg>
      <WrapperBody>
        <CardHeading>
          <WrapperHeading>
            {make}
            <Span> {model}, </Span>
            {year}
          </WrapperHeading>
          <PriceSpan>{rentalPrice}</PriceSpan>
        </CardHeading>
        <CardText>
          {address}| {rentalCompany}|{type}|{model}|{mileage}|
          {functionalities[0]}
        </CardText>
      </WrapperBody>
      <FooterWrapper>
        <CardButton type="button" onClick={toggleModal}>
          Learn More
        </CardButton>
      </FooterWrapper>

      {!isFavorite ? (
        <FavoriteButton type="button" onClick={() => addFavorite(id)}>
          <Icon className="icon-favorite" id="normal" />
        </FavoriteButton>
      ) : (
        <FavoriteButton type="button" onClick={() => removeFavorite(id)}>
          <Icon className="icon-favorite" id="active" />
        </FavoriteButton>
      )}

      {visible && (
        <Modal setVisible={toggleModal}>
          <AdvertDetails advert={advert} />
        </Modal>
      )}
    </>
  );
};

export default AdvertCard;
