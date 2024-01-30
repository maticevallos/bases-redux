import { failedFetch, fetchPokemons, loadingPokemons } from "../reducer/pokemonSlice"


export const getPokemons = (page = 0) => {

    return async (dispatch) => {
        dispatch(loadingPokemons())

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
            const data = await response.json()

            // Colocar los datos en el state y hacer el dispatch de: fetchPokemons
            dispatch(fetchPokemons({ pokemons: data.results, page: page + 1 }))

        } catch (error) {
            dispatch(failedFetch({ error: error.message }))
        }
    }

}