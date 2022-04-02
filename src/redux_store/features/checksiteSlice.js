import { createSlice } from '@reduxjs/toolkit'

const initialState = false;

export const checksiteSlice = createSlice({
  name: 'isAdminSite',
  initialState,
  reducers: {
    changeadminSite: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
       state = true
       return state 
    },
     changeuserSite: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = false
      return state 
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeadminSite, changeuserSite } = checksiteSlice.actions

export default checksiteSlice.reducer 