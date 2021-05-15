import { Box, Center, Grid } from "@chakra-ui/layout";
import {Heading}from "@chakra-ui/react"
import { Image } from '@chakra-ui/image'
import { Container } from "../components/Container";
import { pokedex } from '../pokemon.json-master/pokedex'




function replace(a) {

  console.log('teste', a)

  if (a < 10) {
    console.log('/images/00' + a + '.png')
    return '/images/00' + a + '.png'
  }
  if (a < 100) {
    return '/images/0' + a + '.png'
  }
  if (a < 1000) {
    return '/images/' + a + '.png'
  }


}

export default function Index() {



  return (
    <Container height="100vh" >



      <Grid
        bg="white"
        templateColumns="repeat(4, 1fr)"
        width="100%"
        height="auto"
        gap={3}
      >
        {pokedex.map((poke) => (
          <Box>
            <Center w="200px" h="200" bg="#D9DFD8" flexDirection="column"  borderRadius='20px' >

              <h1>{poke.name.english} </h1>
              <Image
                boxSize="100px"
                objectFit="cover"
                src={replace(poke.id)}
                alt="Segun Adebayo" />
            </Center>
          </Box>
        ))}
      </Grid>

    </Container>
  )
}



export async function getServerSideProps() {

  const result = await fetch('http://localhost:3000/api/listpokemon');

  const listaPokemon = await result.json()

  // const arrayData = []

  // listaPokemon.results.map((item)=>{
  //   const result = await fetch(item.url);
  //   const pokemon = await result.json()
  //   arrayData.push(pokemon)
  // })


  return {
    props: {

      data: listaPokemon
    }
  }
}
