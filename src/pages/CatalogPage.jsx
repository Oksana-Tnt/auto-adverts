import AdvertList from "../components/AdvertList/AdvertList";
import Filter from "../components/Filter/Filter";
import { Container } from "@chakra-ui/react";

const CatalogPage = () => {
  return (
    <section className="catalog-section">
      <Container className="container catalog-container" centerContent>
        <Filter />
        <AdvertList />
      </Container>
    </section>
  );
};

export default CatalogPage;
