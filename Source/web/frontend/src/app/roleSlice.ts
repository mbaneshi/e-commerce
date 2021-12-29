import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RoleState {
  role:String,
}

const initialState: RoleState = {
 role: '',
}

export const RoleSlice = createSlice({
  name: 'Role',
  initialState,
  reducers: {
 seller: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.role = 'seller'
    },
    buyer: (state) => {
      state.role = 'buyer'
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { seller, buyer } = RoleSlice.actions

export default RoleSlice.reducer