import {configureStore,createSlice} from '@reduxjs/toolkit'




const dataSlice= createSlice({
    name:"dataManagment",
    initialState:{
        aboutForm:[{
            productName:'',
            description:'',
            photos:[],
            price:0.0
        }],
        AdditionalForm:{
            benefits:[],
            details:[{ attribute: '', value: '' }],
            category:''
        }
    },
    reducers:{
        aboutform:(state,action)=>{
            const newdetails= action.payload
            state.aboutForm=[...state.aboutForm,newdetails]

        },
        additionalform:(state,action)=>{
            const newAdditionalDetails= action.payload
            state.AdditionalForm=newAdditionalDetails
        }
    }
})

export const {aboutform,additionalform} = dataSlice.actions


export const store= configureStore({
    reducer:{
        data:dataSlice.reducer
    }
})