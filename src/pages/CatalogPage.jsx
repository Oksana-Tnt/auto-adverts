import AdvertList from "../components/AdvertList/AdvertList";
import Filter from "../components/Filter/Filter";

const CatalogPage = () => {
  return (
    <section className="catalog-section">
      <Filter />
      <AdvertList />
    </section>
  );
};

export default CatalogPage;
