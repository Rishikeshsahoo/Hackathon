import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    blockStatus: false,
    AllData: {

    }
}
const dashboardSlice = createSlice({
    name:"dashboard",
    initialState:initialState,
    reducers:{
        setBlockStatus(state,action){
            state.blockStatus = action.payload
            console.log(state.blockStatus)
        },
        setAllData(state,action){
            state.AllData=action.payload
            console.log(state.AllData)
        }
    }
})
export const {
    setBlockStatus,
    setAllData
} = dashboardSlice.actions
const dashboardReducer = dashboardSlice.reducer

export default dashboardReducer;