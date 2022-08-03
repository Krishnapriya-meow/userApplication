import { Action, createSlice, Dispatch, Reducer, ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserList, IUserModel } from "../model/UserModel";

const users: IUserList = {
  data: [],
  singleUser: undefined,
  userModel: {
    name: '',
    job: '',
    id: 0
  }
}

export const USERINFORMATION = 'UserList';

interface userListRootStore {
  UserList: IUserList;
}

export const UsersListSlice = createSlice({
  name: USERINFORMATION,
  initialState: users as IUserList,
  reducers: {
    createSuccess: (state: IUserList, action: any) => {
      state.userModel = action.payload;
      alert('User Successfully Registered')
    },
    getSuccess: (state: IUserList, action: any) => {
      state.data = action.payload;
    },
    viewUser: (state: IUserList, action: any) => {
      state.singleUser = action.payload;
    },

  }
})

export const {
  getSuccess,
  viewUser,
  createSuccess
} = UsersListSlice.actions;

export const usersReducer: Reducer<IUserList> = UsersListSlice.reducer;

export const usersSelector = (state: userListRootStore) => state.UserList.data

export const singleUserSelector = (state: userListRootStore) => state.UserList.singleUser

export function getUser(): ThunkAction<
  void,
  unknown,
  null,
  Action
> {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users`)
      dispatch(getSuccess(response.data.data))
    } catch (err: any) {
      alert(err.response.data.message)
    }
  }
}

export function getSingleUser(id: string): ThunkAction<
  void,
  unknown,
  null,
  Action<any>
> {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`)
      dispatch(viewUser(response.data.data))
    } catch (err: any) {
      alert(err.response.data.message)

    }
  };
}

export function postUser(userData: IUserModel): ThunkAction<
  void,
  unknown,
  null,
  Action<any>
> {
  return async (dispatch: Dispatch) => {

    try {
      const response = await axios.post(`https://reqres.in/api/users`, { userData })
      dispatch(createSuccess({ ...userData, id: response.data.id }))
    } catch (err: any) {
      alert(err.response.data.message)
    }
  }
}
