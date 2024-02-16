import { useEffect, useState } from "react";
import AdvertList from "../components/AdvertList/AdvertList";
import { fetchAdverts } from "../redux/advertsOperations";
import { useDispatch } from "react-redux";
import { CardButton } from "../components/AdvertCard/AdvertCard.styled";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const loadMoreAdverts = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);
  return (
    <>
      <AdvertList />
      <CardButton onClick={loadMoreAdverts}>Load more</CardButton>
    </>
  );
};

export default CatalogPage;
