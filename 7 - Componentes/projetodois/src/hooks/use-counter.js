import { useState, useEffect } from "react"

function useCounter(initial) {
    const [counter, setCounter] = useState(initial)

    const increment = () => {
        setCounter(counter+1)
    }

    // useEffect(() => {
    //     console.log(counter)
    // }, [counter])

    return {counter, increment}
}

export default useCounter