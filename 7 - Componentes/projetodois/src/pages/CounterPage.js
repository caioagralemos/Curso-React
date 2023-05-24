import Botao from "../components/button";
import { useReducer } from "react";
import Panel from "../components/panel";
import { produce } from "immer";

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const CHANGE = 'change'
const SUBMIT = 'submit'

const reducer = (state, action) => {
    // == IF E ELSE ==
    // if (action.type === INCREMENT) {
    //     return {...state, count: state.count+1}
    // } else if (action.type === DECREMENT) {
    //     return {...state, count: state.count-1}
    // } else if (action.type === CHANGE) {
    //     return {...state, toAdd: action.value || 0}
    // } else if (action.type === SUBMIT) {
    //     return {...state, count: state.count + state.toAdd, toAdd: 0}
    // } else {
    //     return {...state}
    // }

    // == SWITCH PURO ==
    // switch(action.type) {
    //     case INCREMENT:
    //         return {...state, count: state.count+1}
    //     case DECREMENT:
    //         return {...state, count: state.count-1}
    //     case CHANGE:
    //         return {...state, toAdd: action.payload || 0}
    //     case SUBMIT:
    //         return {...state, count: state.count + state.toAdd, toAdd: 0}
    //     default:
    //         throw new Error('action.type inesperado: ', action.type)
    // }

    // == SWITCH COM IMMER ==
    switch(action.type) {
        case INCREMENT:
            state.count = state.count + 1
            return
        case DECREMENT:
            state.count = state.count - 1
            return
            return
        case CHANGE:
            state.toAdd = action.payload || 0
            return
        case SUBMIT:
            state.count = state.count + state.toAdd
            state.toAdd = 0
            return
        default:
            throw new Error('action.type inesperado: ', action.type)
    }
}

function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount)
    // const [toAdd, add] = useState(0)
    const [state, dispatch] = useReducer(produce(reducer), { // embalar reducer em produce habilita o immer
        count: initialCount,
        toAdd: 0
    })

    const increment = () => {
        // setCount(count + 1)
        dispatch({
            type: INCREMENT
        })
    }

    const decrement = () => {
        // setCount(count - 1)
        dispatch({
            type: DECREMENT
        })
    }

    const handleChange = (event) => {
        // add(parseInt(event.target.value) || 0)
        dispatch({
            type: CHANGE,
            payload: parseInt(event.target.value)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // setCount(count + parseInt(toAdd))
        // add(0)
        dispatch({
            type: SUBMIT
        })
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Contador é {state.count}</h1>
            <div className="flex flex-row">
                <Botao primary onClick={increment}>
                    Aumentar
                </Botao>
                <Botao primary onClick={decrement}>
                    Diminuir
                </Botao>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Adicione quanto quiser!</label>
                <input type="number" onChange={handleChange} value={state.toAdd} className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Botao>Adicione</Botao>
            </form>
        </Panel>
    )
}


export default CounterPage