<<<<<<< HEAD
import { } from '@chakra-ui/react'

import { Container } from '../components/Container'


export default function Index({ data }) {



  return (
    <Container height="100vh">
    

    </Container>
  )
}



export async function getServerSideProps() {

  const result = await fetch('http://localhost:3000/api/listpokemon');

  const listaPokemon = await result.json()


  return {
    props: {
      data: listaPokemon
        }
  }
}
=======
import { Box, Center, Grid } from "@chakra-ui/layout";
import { Container } from "../components/Container";

const Index = ({ data }) => {
  console.log(data);

  return (
    <Grid bg="black" templateColumns="repeat(4, 1fr)" width="100%" height="100vh" gap={5}>
      {data.map((poke) => (
        <Center w="200px" h="200" bg="red">
          <h1>{poke.name}</h1>
        </Center>
      ))}
    </Grid>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=200"
  );
  const data = await res.json();

  return {
    props: {
      data: data.results,
    },
  };
};
>>>>>>> 1e8cb622873e1b99f2073a22ca712195144b427e
