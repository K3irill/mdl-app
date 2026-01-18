import { IUser } from './user'

export interface AuthState {
  token: string | null
  user: IUser | null
  isAuth: boolean
}

export interface AuthPayload {
  token: string;
  user: IUser
}