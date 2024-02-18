import React from "react";
import img from "../../assets/images/car-nonFound.png";
import { Box, Container, Heading, Img } from "@chakra-ui/react";

const ErrorCard = () => {
  return (
    <Container centerContent padding={"50px"}>
      <Box>
        <Heading paddingBottom={"50px"}>
          OOOps, there is no cars for your requests
        </Heading>
        <Img src={img} width="600px" alt="No Images" />
      </Box>
    </Container>
  );
};

export default ErrorCard;
