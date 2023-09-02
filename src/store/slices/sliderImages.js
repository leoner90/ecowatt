import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'

//init
const initialState = {
  allImages: []
}

export const ShopSlice = createSlice({
  name: 'SliderImages',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(api.endpoints.getGallery.matchFulfilled, (state, action) => { 
      state.allImages = action.payload;
    })   
  },
})

export default ShopSlice.reducer