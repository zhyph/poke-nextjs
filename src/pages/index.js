import { Box, Center, Grid } from "@chakra-ui/layout";
<<<<<<< HEAD
import { Heading } from "@chakra-ui/react"
import { Image } from '@chakra-ui/image'
import { Container } from "../components/Container";
import { pokedex } from '../pokemon.json-master/pokedex'
import Link from 'next/link'




function replace(a) {

  

  if (a < 10) {
    
    return '/images/00' + a + '.png'
=======
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Container } from "../components/Container";
import { pokedex } from "../pokemon.json-master/pokedex";

function replace(a) {
  console.log("teste", a);

  if (a < 10) {
    console.log("/images/00" + a + ".png");
    return "/images/00" + a + ".png";
>>>>>>> 58e5dd442cfc52a035babcea7a06968b1cd659b0
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
    <Container height="100vh">
      <Grid
        bg="white"
        templateColumns="repeat(4, 1fr)"
        width="100%"
        height="auto"
        gap={3}
      >
<<<<<<< HEAD
        {pokedex.map((poke ,  index) => (

     


         
          <Link href={{
            pathname: '/pokemon/[id]',
            query: {
              name: poke.name.english,
              id: poke.id,
              img:replace(poke.id),
              base:JSON.stringify(poke.base),
              type:poke.type
            },
          }}>

{/*  */}
            


            <Box >
              <Center w="200px" h="200" bg="#D9DFD8" flexDirection="column" borderRadius='20px' >

                <h1>{poke.name.english} </h1>
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src={replace(poke.id)}
                  alt="Segun Adebayo" />
              </Center>
            </Box>
          </Link>
          
          
=======
        {pokedex.map((poke) => (
          <Box>
            <Center
              w="200px"
              h="200"
              bg="#D9DFD8"
              flexDirection="column"
              borderRadius="20px"
            >
              <h1>{poke.name.english} </h1>
              <Image
                boxSize="100px"
                objectFit="cover"
                src={replace(poke.id)}
                alt="Segun Adebayo"
              />
            </Center>
          </Box>
>>>>>>> 58e5dd442cfc52a035babcea7a06968b1cd659b0
        ))}
      </Grid>
    </Container>
  );
}

// export async function getServerSideProps() {
//   // const result = await fetch('http://localhost:3000/api/listpokemon%27);

//   // const listaPokemon = await result.json();

<<<<<<< HEAD
// export async function getServerSideProps() {

//   const result = await fetch('http://localhost:3000/api/listpokemon');

//   const listaPokemon = await result.json()

//   // const arrayData = []

//   // listaPokemon.results.map((item)=>{
//   //   const result = await fetch(item.url);
//   //   const pokemon = await result.json()
//   //   arrayData.push(pokemon)
//   // })


//   return {
//     props: {

//       data: listaPokemon
//     }
//   }
=======
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
>>>>>>> 58e5dd442cfc52a035babcea7a06968b1cd659b0
// }
