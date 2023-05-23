import Botao from "../components/button";
import useCounter from "../hooks/use-counter";

function CounterPage({ initialCount }) {
    const {counter, increment} = useCounter(initialCount)

    return (
        <div>
            <h1>Count is {counter}</h1>
            <Botao primary onClick={increment}>
                Increase
            </Botao>
        </div>
    )
}


export default CounterPage