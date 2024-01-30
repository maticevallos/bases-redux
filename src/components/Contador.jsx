import { useDispatch, useSelector } from "react-redux"
/* import { sumar5, sumar, restar, restar5, reset } from "../actions/contadorActions" */
import { decrement, decrement5, increment, increment5, reset } from "../reducer/contadorSlice"

const Contador = () => {

  // Acceder al estado
  // const state = useSelector((state) => state.contador)
  const state = useSelector((state) => state.contador.contador)

  // Despachar acciones
  const dispatch = useDispatch()  

  return (
    <div>
      <h2>Contador con Redux</h2>
      <p>{state}</p>
      <nav>
        {/* <button onClick={() => dispatch(sumar5())}>+5</button>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(restar5())}>-5</button> */}
        <button onClick={() => dispatch(increment5(5))}>+5</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(decrement5(5))}>+5</button>
      </nav>
    </div>
  )
}

export default Contador
