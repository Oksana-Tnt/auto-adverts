import { useFavoriteAdverts } from "../hooks/useFavoriteadverts";
import { Card, Container } from "@chakra-ui/react";
import FavoriteItem from "./FavoriteItem";
import { CatalogWrapper } from "../AdvertCard/AdvertCard.styled";

const FavoriteList = () => {
  const storedFavorite = localStorage.getItem("favorite");
  const initialFavorite = storedFavorite ? JSON.parse(storedFavorite) : [];

  const { favorite, removeFavoriteById } = useFavoriteAdverts(initialFavorite);
  return (
    <Container className="container favorite-container" centerContent>
      <CatalogWrapper>
        {favorite.map((favoriteAdvert) => (
          <Card key={favoriteAdvert.id}>
            <FavoriteItem
              key={favoriteAdvert.id}
              favoriteAdvert={favoriteAdvert}
              removeFavoriteById={removeFavoriteById}
            />
          </Card>
        ))}
      </CatalogWrapper>
    </Container>
  );
};

export default FavoriteList;
