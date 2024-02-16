

import { useFavoriteAdverts } from "../hooks/useFavoriteadverts";
import { Container, SimpleGrid } from "@chakra-ui/react";
import FavoriteItem from "./FavoriteItem";
import { CardAdvert } from "../AdvertCard/AdvertCard.styled";


const FavoriteList= () => {
  const storedFavorite = localStorage.getItem("favorite");
  const initialFavorite = storedFavorite
    ? JSON.parse(storedFavorite)
    : [];

  const { favorite, removeFavoriteById } = useFavoriteAdverts(initialFavorite);
  return (    
   
         <Container bg='blue.600' centerContent>
          <SimpleGrid width={"1184px"}templateColumns='repeat(4, minmax(274px, 1fr))' columnGap={"30px"} rowGap={"50px"}>
        {favorite.map((favoriteAdvert) => (
         <CardAdvert key={favoriteAdvert.id}>
        <FavoriteItem
          key={favoriteAdvert.id}
          favoriteAdvert={favoriteAdvert}
          removeFavoriteById={removeFavoriteById}
        />
        </CardAdvert>
      ))}
      </SimpleGrid>
        </Container>

  );
};

export default FavoriteList;