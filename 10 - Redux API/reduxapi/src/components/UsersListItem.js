import { GoTrashcan } from "react-icons/go"
import Button from "./Button"
import { removeUser } from "../store"
import useThunk from "../hooks/use-thunk"

function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)
    const handleDelete = () => {
        doRemoveUser(user)
    }
    return (
        <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between itens-center cursor-pointer">
                <Button onClick={handleDelete} loading={isLoading}><GoTrashcan /></Button>
                {error && <div>Error deleting user {error.message}</div>}
                {user.name}
            </div>
        </div>
    )
}

export default UsersListItem