import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Grid, Text } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import { pokedex } from "../pokemon.json-master/pokedex";
import { Layout } from "./Layout";

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
    : `linear-gradient(90deg, ${results[0]} 0%, ${results[1]} 100%)`;
};

// bgColoursType(poke.type) ||

console.log(bgColoursType(pokedex[0].type[0]));

function MainPage() {
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

  return (
    <Layout>
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
        {pokedex.map((poke) => (
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
                bg={bgColoursType(poke.type) || "#D9DFD8"}
                display="flex"
                flexDirection="column"
                borderRadius="20px"
                cursor="pointer"
                w="90%"
                height="100%"
                overflow="hidden"
                maxH="200px"
              >
                <Box marginStart="4" marginTop="4" w="auto" h="auto">
                  <Text fontSize="xl" color="white">
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
                    <Text filter="none" color="white" padding="5px">
                      {poke.type[0]}
                    </Text>
                  </Center>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  marginEnd="4"
                  w="auto"
                  h="auto"
                >
                  <Image
                    boxSize="200px"
                    objectFit="cover"
                    src="/pokeballwb.png"
                    position="relative"
                    left="160px"
                    top="-10px"
                    filter="opacity(30%)"
                  />
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    m="10px"
                    position="relative"
                    zIndex="1"
                    src={replace(poke.id)}
                    alt={poke.name.english}
                  />
                </Box>
              </Box>
            </Center>
          </Link>
        ))}
      </Grid>
    </Layout>
  );
}

export default MainPage;
