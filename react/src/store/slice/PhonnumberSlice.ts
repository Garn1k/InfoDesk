import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPhonnumber } from '../../models/model'

interface PhonnumberState {
   loading: boolean;
   error:string;
   Phonnumber:IPhonnumber[]
}

const initialState: PhonnumberState = {
    loading: false,
    error:"",
    Phonnumber:[],
}

export const phonnumberSlice = createSlice({
  name: 'phonnumber',
  initialState,
  reducers: {
    fetching7(state){
        state.loading = true;
    },
    fetchSuccess7(state,action: PayloadAction<IPhonnumber[]>){
        state.loading = false;
        state.Phonnumber = action.payload;
        state.error = ''
    },
    fetchError7(state,action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const {  fetching7, fetchSuccess7, fetchError7 } = phonnumberSlice.actions


export default phonnumberSlice.reducer