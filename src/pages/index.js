import { Box, Center, Grid, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Container } from "../components/Container";
import { pokedex } from "../pokemon.json-master/pokedex";
import Link from "next/link";

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

export default function Index() {
  return (
    <Box bg="black">
      <Hero>Pokedex</Hero>
      <Center>
        <Grid
          templateColumns="repeat(3, 1fr)"
          width="50%"
          height="auto"
          padding="5"
          gap="3"
          bg="white"
          borderRadius="3%"
        >
          {pokedex.map((poke) => (
            <Flex justifyContent="center" alignItems="center">
              <Center
                w="200px"
                h="200px"
                bg="#D9DFD8"
                flexDirection="column"
                borderRadius="20px"
                m="5"
              >
                <Text fontSize="xl" color="black">
                  {poke.name.english}{" "}
                </Text>
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  mt="10px"
                  src={replace(poke.id)}
                  alt={poke.name.english}
                />
              </Center>
            </Flex>
          ))}
        </Grid>
      </Center>
    </Box>
  );
}

// export async function getServerSideProps() {
//   // const result = await fetch('http://localhost:3000/api/listpokemon%27);

//   // const listaPokemon = await result.json();

//   // const arrayData = []

//   // listaPokemon.results.map((item)=>{
//   //   const result = await fetch(item.url);
//   //   const pokemon = await result.json()
//   //   arrayData.push(pokemon)
//   // })

//   return {
//     props: {
//       data: listaPokemon,
//     },
//   };
// }
