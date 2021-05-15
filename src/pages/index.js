import { Box, Center, Grid } from "@chakra-ui/layout";
import { Container } from "../components/Container";

const Index = ({ data }) => {
  console.log(data);

  return (
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

  return {
    props: {
      data: data.results,
    },
  };
};
