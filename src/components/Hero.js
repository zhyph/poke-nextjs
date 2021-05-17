import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export const Hero = ({ children }) => (
  <Flex justifyContent="center" alignItems="center" height="auto">
    <Link href="/" passHref>
      <a>
        <Heading
          fontSize="10vw"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          {children}
        </Heading>
      </a>
    </Link>
  </Flex>
);
