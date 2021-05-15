import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ children }) => (
  <Flex justifyContent="center" alignItems="center" height="30%">
    <Heading
      fontSize="10vw"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
    >
      {children}
    </Heading>
  </Flex>
);
