import { Box, Center, Grid } from "@chakra-ui/layout";
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
<<<<<<< HEAD
    <Grid
      bg="black"
      templateColumns="repeat(4, 1fr)"
      width="100%"
      height="100vh"
      gap={5}
    >
      {data.map((poke) => (
        <Box>
          <Center w="200px" h="200" bg="red">
            <h1>{poke.name} ju bicha</h1>
          </Center>
        </Box>
      ))}
    </Grid>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );
  const data = await res.json();
=======
    <Container height="100vh">



      <Grid
        bg="black"
        templateColumns="repeat(4, 1fr)"
        width="100%"
        height="100vh"
        gap={5}
      >
        {pokedex.map((poke) => (
          <Box>
            <Center w="200px" h="200" bg="red">

              <h1>{poke.name.english} {replace(poke.id)}</h1>
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

>>>>>>> ae4a73ee56ef0e114c138a8662f29b0f1ce18a86

  return {
    props: {

      data: listaPokemon
    }
  }
}
