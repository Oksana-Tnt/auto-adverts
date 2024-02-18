import { Container } from "@chakra-ui/react";
import { HomePageWrapper, RentLink, Title } from "./HomePage.styled";

const HomePage = () => {
  return (
    <section className="section homePage">
      <Container className="container home-container" centerContent>
        <HomePageWrapper>
          <Title>Where driving dreams come true...</Title>
          <RentLink to={"/catalog"}>Rent now</RentLink>
        </HomePageWrapper>
      </Container>
    </section>
  );
};

export default HomePage;
