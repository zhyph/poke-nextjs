
import { useRouter } from 'next/router';
import { useEffect } from 'react';



export default function Index() {
    const router = useRouter();
    const data = router.query;

    useEffect(()=>{

        console.log(data)
        // console.log(data.base)
        // const arr = data.base.split(',')
        // console.log(arr)
        // const newbase = []
        // arr.map((item)=>{
        //     newbase.push(item.replace(/[^\d]+/g,''))
        // })
        // console.log(newbase)
        // const newbase2 = ['HP','Attack','Defense','Sp. Attack','Sp.Defense','Speed']
        // newbase.map((item,index)=>{
        //    newbase[index] =  ' '+newbase2[index]+' '+newbase[index]+' '  
        // })
        // console.log(newbase)

        console.log(JSON.parse(data.base))
        



    },[data])


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
