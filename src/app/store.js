import {configureStore} from "@reduxjs/toolkit"
import formDataSlice from "../features/FormSlice"
import CardsReducer from "../features/ProductsCardsSlice"


const store = configureStore({
    reducer:{
        formData : formDataSlice,
        cards : CardsReducer

    }
})

export default store