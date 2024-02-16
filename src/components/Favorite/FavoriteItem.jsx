import { CardBody, CardFooter, CardHeader, Image } from "@chakra-ui/react";
import {
  CardButton,
  CardHeading,
  CardText,
  FavoriteButton,
  PriceSpan,
  Span,
  WrapperHeading,
} from "../AdvertCard/AdvertCard.styled";
import Icon from "../Icon/Icon";
import { useState } from "react";
import Modal from "../Modal/Modal";
import AdvertDetails from "../AdvertDetail/AdvertDetail";

const FavoriteItem = ({ favoriteAdvert, removeFavoriteById }) => {
  const {
    id,
    year,
    make,
    model,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = favoriteAdvert;
  const firstFunctionalities = functionalities[0];
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <CardHeader>
        <Image
          boxSize="274px"
          objectFit="cover"
          borderRadius="14px"
          src={img}
          alt={model}
        />
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
          {address}| {rentalCompany}|{type}|{model}|{mileage}|{" "}
          {firstFunctionalities}
        </CardText>
      </CardBody>
      <CardFooter>
        <CardButton onClick={toggleModal}>Learn More</CardButton>
      </CardFooter>

      <FavoriteButton type="button" onClick={() => removeFavoriteById(id)}>
        <Icon className="icon-favorite" id="active" />
      </FavoriteButton>

      {isVisible && (
        <Modal setVisible={toggleModal}>
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
            functionalities={functionalities}
          />
        </Modal>
      )}
    </>
  );
};

export default FavoriteItem;
