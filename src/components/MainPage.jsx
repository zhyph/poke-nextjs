import { keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Grid, Text } from "@chakra-ui/layout";
import Link from "next/link";
import React, { useState } from "react";
import { pokedex } from "../pokemon.json-master/pokedex";
import { Layout } from "./Layout";
import styles from "../styles/teste.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

const colours = {
  Normal: "#A8a77a",
  Fire: "#Ee8130",
  Water: "#6390f0",
  Electric: "#F7d02c",
  Grass: "#7ac74c",
  Ice: "#96d9d6",
  Fighting: "#C22e28",
  Poison: "#A33ea1",
  Ground: "#E2bf65",
  Flying: "#A98ff3",
  Psychic: "#F95587",
  Bug: "#A6b91a",
  Rock: "#B6a136",
  Ghost: "#735797",
  Dragon: "#6f35fc",
  Dark: "#705746",
  Steel: "#B7b7ce",
  Fairy: "#D685ad",
};

const gradient = keyframes`
 0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100%{
    background-position: 50% 0%;
  }
`;

function MainPage() {
  const [next, setNext] = useState(20);
  const [items, setItems] = useState(pokedex.slice(0, 20));
  const [hasMore, setHasMore] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${gradient} 5s ease infinite alternate`;
  // console.log(items);

  const fetchMoreData = () => {
    if (items.length >= pokedex.length) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setItems(items.concat(pokedex.slice(next, next + 20)));
      setNext(next + 20);
    }, 500);
  };

  function replace(a) {
    if (a < 10) {
      return "/images/00" + a + ".png";
    }
    if (a < 100) {
      return "/images/0" + a + ".png";
    }
    if (a < 1000) {
      return "/images/" + a + ".png";
    }
  }

  const bgColoursType = (a) => {
    const arrTypeColour = Object.entries(colours);
    const b = a;
    //   console.log(b);
    //   console.log(arrTypeColour);
    let results = arrTypeColour.map((item) => {
      if (item[0] === b) {
        //   console.log(item[1]);
        return item[1];
      } else if (item[0] === b[0] || item[0] === b[1]) {
        return item[1];
      }
    });
    //   console.log(results);
    results = results.filter((value) => {
      return value !== undefined;
    });
    //   console.log(results);
    return results.length < 2
      ? results[0]
      : `linear-gradient(90deg, ${results[0]}, ${results[1]})`;
  };

  return (
    <Layout>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <Text fontSize="4xl" color="white" textAlign="center" pb="40px">
            Loading...
          </Text>
        }
      >
        <Center>
          <Grid
            templateColumns="repeat(3, 1fr)"
            width="50%"
            height="auto"
            padding="6"
            marginTop="6"
            marginBottom="6"
            gap="5"
            bg="white"
            borderRadius="3%"
          >
            {items.map((poke, index) => (
              <Link
                href={{
                  pathname: "/pokemon/[id]",
                  query: {
                    name: poke.name.english,
                    id: poke.id,
                    img: replace(poke.id),
                    base: JSON.stringify(poke.base),
                    type: poke.type,
                  },
                }}
              >
                <Center>
                  <Box
                    className={styles.cardTranslateY}
                    bg={bgColoursType(poke.type) || "#D9DFD8"}
                    flexDirection="column"
                    borderRadius="20px"
                    cursor="pointer"
                    w="90%"
                    animation="paused"
                    height="100%"
                    overflow="hidden"
                    _hover={{
                      bgSize: "150% 150%",
                      animation,
                    }}
                    maxH="190px"
                  >
                    <Grid templateColumns="repeat(2, 1fr)">
                      <Box marginStart="4" marginTop="4" w="auto" h="auto">
                        <Text fontSize="lg" color="white">
                          {poke.name.english}
                        </Text>
                        <Center
                          bg={bgColoursType(poke.type[0]) || "#D9DFD8"}
                          display="inline-block"
                          borderRadius="20%"
                          filter=" brightness(70%)"
                          mt=".2rem"
                          ms=".5rem"
                        >
                          <Text fontSize="lg" color="white" padding="5px">
                            {poke.type[0]}
                          </Text>
                        </Center>
                      </Box>
                      <Flex justifyContent="center" alignItems="center">
                        <Text
                          marginBottom="20px"
                          zIndex="xl"
                          fontSize="lg"
                          color="white"
                          fontWeight="bold"
                        >
                          #{poke.id}
                        </Text>
                      </Flex>
                    </Grid>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      // marginEnd="4"
                      w="auto"
                      h="auto"
                      position="relative"
                      top="0"
                      className={styles.cardTranslateY}
                      left="0"
                    >
                      <Image
                        boxSize="auto"
                        objectFit="cover"
                        src="/pokeballwb.png"
                        position="absolute"
                        left="60px"
                        top="-40px"
                        filter="opacity(30%)"
                      />
                      <Image
                        boxSize="100px"
                        objectFit="cover"
                        position="relative"
                        top="-10px"
                        left="-20px"
                        zIndex="1"
                        src={replace(poke.id)}
                        // className={styles.cardTranslateY}
                        alt={poke.name.english}
                      />
                    </Box>
                  </Box>
                </Center>
              </Link>
            ))}
          </Grid>
        </Center>
      </InfiniteScroll>
    </Layout>
  );
}

export default MainPage;

// export const getStaticProps = async (ctx) => {
//   const res = await fetch("http://localhost:3000/api/pokemon");
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       data: res.listaPokemon,
//     },
//   };
// };
