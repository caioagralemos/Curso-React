import { useEffect, useState } from "react";
import Botao from "../components/button";

function CounterPage({ initialCount }) {
    const [count, setCount] = useState(initialCount)

    const handleClick = () => {
        setCount(count+1)
    }

    useEffect(() => {
        console.log(count)
    }, [count])

    return (
        <div>
            <h1>Count is {count}</h1>
            <Botao primary onClick={handleClick}>
                Increase
            </Botao>
        </div>
    )
}


export default CounterPage