
import {createSlice} from "@reduxjs/toolkit"

export const  CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            //action.payload se ham parameter acces kr pa re hai jo bhi beja gaya hai hamre case mai ham ne post aur post.id beji hai 
            state.push(action.payload);
        },
        remove:(state,action)=>{
            return state.filter((item)=> item.id !== action.payload);
        },
    }
})

export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;