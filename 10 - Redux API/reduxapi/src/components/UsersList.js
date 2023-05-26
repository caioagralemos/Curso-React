import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store"
import Skeleton from "./Skeleton"

function UsersList() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const {isLoading, data, error} = useSelector((state) => {
        return state.users
    })

    const renderedData = data.map((d) => {
        return <div key={d.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between itens-center cursor-pointer">
                {d.name}
            </div>
        </div>
    })

    if (isLoading) {
        return <Skeleton times={2} className='h-10 w-full'/>
    } 
    if(error) {
        return <div>Error fetching data</div>
    }
    
    return <div>{renderedData}</div>
}

export default UsersList