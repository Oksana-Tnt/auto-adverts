import AdvertList from "../components/AdvertList/AdvertList";
import Filter from "../components/Filter/Filter";

const CatalogPage = () => {
  return (
    <section class="section">
      <Filter />
      <AdvertList />
    </section>
  );
};

export default CatalogPage;
