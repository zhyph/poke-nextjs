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
