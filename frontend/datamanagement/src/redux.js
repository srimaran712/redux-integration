import {configureStore,createSlice} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';




const dataSlice= createSlice({
    name:"dataManagment",
    initialState:{
        aboutForm:[{
            productName:'',
            description:'',
            photos:[],
            price:0.0
        }],
        AdditionalForm:[{
            benefits:[],
            details:[{ attribute: '', value: '' }],
            category:''
        }]
    },
    reducers:{
        aboutform:(state,action)=>{
            const newdetails= action.payload
            state.aboutForm=[newdetails,...state.aboutForm]

        },
        additionalform:(state,action)=>{
            const newAdditionalDetails= action.payload
            state.AdditionalForm=newAdditionalDetails
        }
    }
})

export const {aboutform,additionalform} = dataSlice.actions

// Persist config
const persistConfig = {
    key: 'data',
    storage,
};
const persistedReducer = persistReducer(persistConfig, dataSlice.reducer);
export const store= configureStore({
    reducer:{
        data:persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);