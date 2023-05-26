import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => { //'users/fetch' é nosso basetype
    const response = await axios.get('http://localhost:3005/users')

    // DEVELOPMENT ONLY
    await pause(1000)

    return response.data
}) 

// DEVELOPMENT ONLY
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

export {fetchUsers}