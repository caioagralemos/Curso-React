import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import Button from './Button'
import Skeleton from "./Skeleton"
import useThunk from "../hooks/use-thunk"

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)

    const { isLoading, data, error } = useSelector((state) => {
        return state.users
    })

    let content;

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    const handleUserAdd = () => {
        doCreateUser()
    }

    if (isLoadingUsers) {
        content = <Skeleton times={12} className='h-10 w-full' />
    }
    if (loadingUsersError) {
        content = <div>Error fetching data</div>
    }

    if (!isLoadingUsers && !loadingUsersError) {
        content = data.map((user) => {
            return (
                <div key={user.id} className="mb-2 border rounded">
                    <div className="flex p-2 justify-between itens-center cursor-pointer">
                        {user.name}
                    </div>
                </div>
            )
        })
    }

    return <div>
        <div className="flex flex-row justify-between items-center m-3">
            <h1 className="m-2 text-xl">Usuários</h1>
            <Button onClick={handleUserAdd} loading={isCreatingUser}>
                + Add User
            </Button>
            {creatingUserError && `Erro criando usuário`}
        </div>
        <div>
            {content}
        </div>
    </div>
}

export default UsersList