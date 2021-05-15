
import { useRouter } from 'next/router';
import { useEffect } from 'react';



export default function Index() {
    const router = useRouter();
    const id = router.query;

    useEffect(()=>{

        console.log(id)


    },[id])


    return (
        <>
           teste
        </>
    )
}



// export async function getServerSideProps() {

//     const result = await fetch('http://localhost:3000/api/listpokemon');

//     const listaPokemon = await result.json()

//     // const arrayData = []

//     // listaPokemon.results.map((item)=>{
//     //   const result = await fetch(item.url);
//     //   const pokemon = await result.json()
//     //   arrayData.push(pokemon)
//     // })


//     return {
//         props: {

//             data: listaPokemon
//         }
//     }
// }
