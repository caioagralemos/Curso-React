import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"

function useThunk(thunk){
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    const runThunk = useCallback((x) => {
        setIsLoading(true)
        dispatch(thunk(x))
            .unwrap()
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
    }, [dispatch, thunk])

    return [runThunk, isLoading, error]
}

export default useThunk