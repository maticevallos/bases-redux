import { configureStore } from "@reduxjs/toolkit" 
/* import contadorReducer from "../reducer/contadorReducer"; */
import { counterSlice } from "../reducer/contadorSlice";
import { pokemonSlice } from "../reducer/pokemonSlice";
/* import { thunk } from "redux-thunk"; */
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        /* contador: contadorReducer */
        contador: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    },
    /* middleware: [thunk] */
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store;

