import { createSlice } from "@reduxjs/toolkit";
import { countryDialCodes } from "../../utils/countryCodes";

const countryCodeSlice = createSlice({
    name: 'countryCode',
    initialState: {
        value: 'in'
    },
    reducers: {
        setCountryCode: (state, action) => {
            const value = action.payload
            const countryCode = Object.keys(countryDialCodes).find((key) => countryDialCodes[key] === value);
            state.value = countryCode
        }
    }
})

export const { setCountryCode } = countryCodeSlice.actions

export const countryCodeReducer = countryCodeSlice.reducer