import { Box, Center, Flex, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { Hero } from "./Hero";

export const Layout = ({ children }) => {
  return (
    <Box bg="black" height="100vh">
      <Hero>Pokedex</Hero>
      {/* <Box> */}
      <Center bg="black" width="100%" height="auto">
        {children}
      </Center>
      {/* </Box> */}
    </Box>
  );
};
