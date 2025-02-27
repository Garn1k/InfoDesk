import { Dispatch } from "@reduxjs/toolkit";
import axios from "../../axios";
import {  fetching7, fetchSuccess7, fetchError7 } from "../slice/PhonnumberSlice";

export const fetchPhonnumber = ()=>{
    return async (dispatch:Dispatch)=>{
        try{
            dispatch(fetching7());
            const response =await axios.get('phone');
            dispatch(fetchSuccess7(response.data));
        }
        catch(error){
            dispatch(fetchError7(error as Error));
        }

    }
}