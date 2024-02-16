import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAdverts } from "../../redux/selectors";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { CardAdvert } from "../../components/AdvertCard/AdvertCard.styled";
import Loader from "../Loader/Loader";
import AdvertCard from "../AdvertCard/AdvertCard";
import ErrorCard from "../ErrorCard/ErrorCard";
const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const AdvertList = () => {
  const { adverts, status } = useSelector(getAdverts);

  const [newAdverts, setNewAdverts] = useState([]);

  useEffect(() => {
    setNewAdverts((prev) => [...prev, ...adverts]);
  }, [adverts]);

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

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.FULFILLED) {
    return (
      <>
        <Container bg="blue.600" centerContent>
          <SimpleGrid
            width={"1184px"}
            templateColumns="repeat(4, minmax(274px, 1fr))"
            columnGap={"30px"}
            rowGap={"50px"}
          >
            {newAdverts?.map((advert) => (
              <CardAdvert key={advert.id}>
                <AdvertCard
                  advert={advert}
                  addFavorite={addFavorite}
                  removeFavorite={removeFavorite}
                  isFavorite={isFavorite(advert.id)}
                />
              </CardAdvert>
            ))}
          </SimpleGrid>
        </Container>
      </>
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;
};

export default AdvertList;
