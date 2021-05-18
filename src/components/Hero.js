import {
  Flex,
  Heading,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/teste.module.css";

// const invertColor = keyframes`
//   from { background:"linear-gradient(90deg, #7928CA 0%, #FF0080 100%)" }
//   to { background: "linear-gradient(90deg, #FF0080 0%, #7928CA 100%)" }
// `;

export const Hero = ({ children }) => (
  <Flex justifyContent="center" alignItems="center" height="auto">
    <Link href="/" passHref>
      <a>
        <Heading
          fontSize="10vw"
          bgGradient="linear(to-r, #FF0080, #7928CA)"
          bgClip="text"
          className={styles.inverted}
        >
          {children}
        </Heading>
      </a>
    </Link>
  </Flex>
);
