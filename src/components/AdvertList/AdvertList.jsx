import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Card } from "@chakra-ui/react";
import {
  ButtonWrapper,
  CardButton,
  CatalogWrapper,
} from "../../components/AdvertCard/AdvertCard.styled";
import Loader from "../Loader/Loader";
import AdvertCard from "../AdvertCard/AdvertCard";
import ErrorCard from "../ErrorCard/ErrorCard";
import { getAdverts } from "../../redux/adverts/selectors";
import { fetchAdverts } from "../../redux/adverts/advertsOperations";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const AdvertList = () => {
  const { adverts, filters, status } = useSelector(getAdverts);

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const loadMoreAdverts = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const params = {
      page: 1,
      limit: 12,
      make: "",
      rentalPrice: "",
    };
    dispatch(fetchAdverts(params));
  }, [dispatch]);

  useEffect(() => {
    const params = {
      page: page,
      limit: 12,
      make: filters[0],
      rentalPrice: filters[1],
    };
    dispatch(fetchAdverts(params));
  }, [dispatch, page, filters]);

  const [newAdverts, setNewAdverts] = useState([]);

  useEffect(() => {
    setNewAdverts((prev) => [...prev, ...adverts]);
  }, [adverts]);

  const renderAvderts = filters.lenght === 0 ? newAdverts : adverts;
  const size = Object.keys(renderAvderts);

  //-----------------Favorite--------------------------------------------
  const storedFavorite = localStorage.getItem("favorite");
  const initialFavorite = storedFavorite ? JSON.parse(storedFavorite) : [];

  const [favorite, setFavorite] = useState(initialFavorite);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const isFavorite = (id) => favorite.some((item) => item.id === id);

  const addFavorite = (id) => {
    const isAlreadyFavorite = favorite.some((item) => item.id === id);

    if (!isAlreadyFavorite) {
      const advertToAdd = adverts.find((advert) => advert.id === id);
      if (advertToAdd) {
        setFavorite((prevFavorite) => [...prevFavorite, advertToAdd]);
      }
    }
  };

  const removeFavorite = (id) => {
    setFavorite((prevFavorite) =>
      prevFavorite.filter((item) => item.id !== id)
    );
  };

  console.log(size.length);
  //---------------------------------------------------------------------------------------
  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.FULFILLED) {
    return (
      <>
        <CatalogWrapper>
          {renderAvderts?.map((advert) => (
            <Card key={advert.id}>
              <AdvertCard
                advert={advert}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isFavorite={isFavorite(advert.id)}
              />
            </Card>
          ))}
        </CatalogWrapper>

        <ButtonWrapper>
          <CardButton onClick={loadMoreAdverts}>Load more</CardButton>
        </ButtonWrapper>
      </>
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;
};

export default AdvertList;
