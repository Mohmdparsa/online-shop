import {configureStore} from "@reduxjs/toolkit"
import formDataSlice from "../features/FormSlice"


const store = configureStore({
    reducer:{
        formData : formDataSlice

    }
})

export default store