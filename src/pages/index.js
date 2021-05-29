import { Box, Center, Flex, Grid, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Hero } from "../components/Hero";
import { pokedex } from "../pokemon.json-master/pokedex";
import Link from "next/link";
import styles from "../../styles/link.module.css";
import MainPage from "../components/MainPage";

// function replace(a) {
//   if (a < 10) {
//     return "/images/00" + a + ".png";
//   }
//   if (a < 100) {
//     return "/images/0" + a + ".png";
//   }
//   if (a < 1000) {
//     return "/images/" + a + ".png";
//   }
// }

export default function Index({ data }) {
  // console.log(data);
  return (
    // <Box bg="black">
    //   <Link href="/" passHref>
    //     <a>
    //       <Hero>Pokedex</Hero>
    //     </a>
    //   </Link>
    //   <Center>
    //     <Grid
    //       templateColumns="repeat(3, 1fr)"
    //       width="50%"
    //       height="auto"
    //       padding="6"
    //       gap="3"
    //       bg="white"
    //       borderRadius="3%"
    //     >
    //       {pokedex.map((poke) => (
    //         <Link
    //           href={{
    //             pathname: "/pokemon/[id]",
    //             query: {
    //               name: poke.name.english,
    //               id: poke.id,
    //               img: replace(poke.id),
    //               base: JSON.stringify(poke.base),
    //               type: poke.type,
    //             },
    //           }}
    //         >
    //           <Flex
    //             justifyContent="center"
    //             alignItems="center"
    //             cursor="pointer"
    //             margin="0"
    //             padding="1"
    //           >
    //             <Center
    //               w="100%"
    //               h="100%"
    //               bg="#D9DFD8"
    //               flexDirection="column"
    //               borderRadius="20px"
    //             >
    //               <Text fontSize="xl" color="black">
    //                 {poke.name.english}
    //               </Text>
    //               <Image
    //                 boxSize="100px"
    //                 objectFit="cover"
    //                 m="10px"
    //                 src={replace(poke.id)}
    //                 alt={poke.name.english}
    //               />
    //             </Center>
    //           </Flex>
    //         </Link>
    //       ))}
    //     </Grid>
    //   </Center>
    // </Box>
    <MainPage data={data}></MainPage>
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
export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/pokemon");
  const data = await res.json();
  console.log(data.listaPokemon);
  return {
    props: {
      data: data.listaPokemon,
    },
  };
}
