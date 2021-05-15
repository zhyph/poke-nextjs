import { apibase } from '../../../api'

export default async (req, res) => {
    const result = await fetch(apibase);

    const listaPokemon = await result.json();


    res.status(200).json({
        listaPokemon: listaPokemon,

    })

}