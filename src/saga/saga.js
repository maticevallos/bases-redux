import { call, put, takeEvery } from 'redux-saga/effects'
import { failedFetch, fetchPokemons, loadingPokemons } from '../reducer/pokemonSlice'


// Servicio para traer los datos de la API de pokemons
const fetchPokemon = async (page = 0) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
    const data = response.json()
    return data;
}

// Saga para obtener los datos
function* getPokemons(action) {
    const page = action.payload

    try {
        yield put(loadingPokemons())

        // Obtener los datos de la API
        const data = yield call(fetchPokemon, page)

        // Guardar los datos en la store si todo es exitoso
        yield put(fetchPokemons({ pokemons: data.results, page: page }))
    } catch (error) {
        yield put(failedFetch({ error: error.message }))
    }
}

// Saga principal para observar la accion de getPokemons
function* watchGetPokemons() {
    yield takeEvery('pokemon/fetchPokemon', getPokemons)
}

export default watchGetPokemons;