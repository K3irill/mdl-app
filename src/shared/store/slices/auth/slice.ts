import { AuthPayload, AuthState } from '@/src/shared/types/auth'
import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState: AuthState = {
  isAuth: false,
  user: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    setAuth(state, action:PayloadAction<AuthPayload>){
      state.token = action.payload.token
      state.user = action.payload.user
      state.isAuth = true
    },
    logout(state){
      state.token = null
      state.user = null
      state.isAuth = false
    }
  }
})

export const { setAuth, logout } = authSlice.actions
export default authSlice.reducer