import { GoTrashcan } from "react-icons/go"
import Button from "./Button"
import { removeUser } from "../store"
import useThunk from "../hooks/use-thunk"
import ExpandablePanel from "./ExpandablePanel"

function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)
    const handleDelete = () => {
        doRemoveUser(user)
    }
    const header = <>
        <Button onClick={handleDelete} loading={isLoading}><GoTrashcan /></Button>
        {error && <div>Error deleting user {error.message}</div>}
        <div className="ml-1">
            {user.name}
        </div>
    </>
    return (
        <ExpandablePanel header={header} id={user.id} />
    )
}

export default UsersListItem