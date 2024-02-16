import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/advertsOperations";
import { useEffect, useState } from "react";
import { getAdverts } from "../../redux/selectors";
import {Container,  SimpleGrid } from "@chakra-ui/react";
import { CardAdvert, CardButton } from "../../components/AdvertCard/AdvertCard.styled";
import Loader from "../Loader/Loader";
import AdvertCard from "../AdvertCard/AdvertCard";
import ErrorCard from "../ErrorCard/ErrorCard";
const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
  };

const AdvertList = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const {adverts, status} = useSelector(getAdverts);
    const [loadAdverts, setLoadAdverts]=useState(adverts);

    useEffect(() => {
      dispatch(fetchAdverts(currentPage));      
         
    }, [dispatch, currentPage]);

    useEffect(()=>{
        if(adverts){
            setLoadAdverts((prevState)=>[...prevState, ...adverts]);
        }
    }, [adverts])
    
    const loadMoreImages = () => {
        setCurrentPage(prevPage => prevPage + 1);
      };

    const storedFavorite = localStorage.getItem("favorite");
    const initialFavorite = storedFavorite
      ? JSON.parse(storedFavorite)
      : [];
  
    const [favorite, setFavorite] = useState(initialFavorite);
  
    useEffect(() => {
      localStorage.setItem("favorite", JSON.stringify(favorite));
    }, [favorite]);
  
    const isFavorite = (id) => favorite.some((item) => item.id === id);
  
    const addFavorite = (id) => {
        console.log(id);
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
        <><Container bg='blue.600' centerContent>
            <SimpleGrid width={"1184px"} templateColumns='repeat(4, minmax(274px, 1fr))' columnGap={"30px"} rowGap={"50px"}>
                {loadAdverts.map(({ id, year, make, model, img, rentalPrice, address, rentalCompany, type, mileage, functionality }) => (
                    <CardAdvert key={id}>
                        <AdvertCard
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
                            functionality={functionality}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                            isFavorite={isFavorite(id)} />
                    </CardAdvert>
                ))}
            </SimpleGrid>
        <CardButton onClick={loadMoreImages}>Load more</CardButton>
        </Container>
        </>
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;    
  };

export default AdvertList;