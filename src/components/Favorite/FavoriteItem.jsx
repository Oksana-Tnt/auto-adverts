import { CardBody, CardFooter, CardHeader, Image } from "@chakra-ui/react";
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
} from "../AdvertCard/AdvertCard.styled";
import Icon from "../Icon/Icon";
import { useState } from "react";
import Modal from "../Modal/Modal";
import AdvertDetails from "../AdvertDetail/AdvertDetail";
import { useSelector } from "react-redux";
import { getAdverts } from "../../redux/adverts/selectors";

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
          {address}| {rentalCompany}|{type}|{model}|{mileage}|{" "}
          {firstFunctionalities}
        </CardText>
      </WrapperBody>
      <FooterWrapper>
        <CardButton onClick={toggleModal}>Learn More</CardButton>
      </FooterWrapper>

      <FavoriteButton type="button" onClick={() => removeFavoriteById(id)}>
        <Icon className="icon-favorite" id="active" />
      </FavoriteButton>

      {isVisible && (
        <Modal setVisible={toggleModal}>
          <AdvertDetails advert={favoriteAdvert} />
        </Modal>
      )}
    </>
  );
};

export default FavoriteItem;
