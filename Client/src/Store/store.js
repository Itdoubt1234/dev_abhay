import { configureStore } from '@reduxjs/toolkit'
import { countryCodeReducer } from './Contact/countryCodeSlice'

export const store = configureStore({
    reducer: {
        countryCodeReducer,
    }
})