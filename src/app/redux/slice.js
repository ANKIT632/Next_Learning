import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    users:[],
}

const userSlice = createSlice({
    name:" ",
    initialState,
    reducers:{
       addUser:(state,action)=>{
  
        const data={
            id:nanoid(),
            name:action.payload
        }
        state.users.push(data);
    }
}
});


// addUser is a action
export const {addUser}=userSlice.actions;

export default userSlice.reducer;