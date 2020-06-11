/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { produce } from "immer";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST" as const;
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE" as const;
export const USER_LOGOUT = "USER_LOGOUT" as const;
export const USER_OAUTH_LOGIN_SUECCESS = "USER_OAUTH_LOGIN_SUECESS" as const;

type authState = {
  user_id: number;
  age?: number;
  gender?: number;
  isLoding: boolean;
  err: string;
};
type value = {
  email: string;
  password: string;
};
export const callLoginAPi = (loginValue: value) => ({
  type: USER_LOGIN_REQUEST,
  payload: { loginValue },
});

export const userLoginSuccess = (userInfo: authState) => ({
  type: USER_LOGIN_SUCCESS,
  payload: { userInfo },
});

export const userLoginFailure = (text: string) => ({
  type: USER_LOGIN_FAILURE,
  payload: {
    text,
  },
});
export const oauthLoginSuccess = (user_id: authState) => ({
  type: USER_OAUTH_LOGIN_SUECCESS,
  payload: user_id,
});
export const userLogout = () => ({
  type: USER_LOGOUT,
});

const inintialAuthState: authState = {
  user_id: 0,
  age: 0,
  gender: 0,
  isLoding: false,
  err: "",
};
export type authActions =
  | ReturnType<typeof callLoginAPi>
  | ReturnType<typeof userLoginSuccess>
  | ReturnType<typeof userLoginFailure>
  | ReturnType<typeof oauthLoginSuccess>
  | ReturnType<typeof userLogout>;

const reducer = (state = inintialAuthState, action: authActions) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const { user_id, age, gender } = action.payload.userInfo;
      return { ...state, user_id, age, gender };
    }
    case USER_LOGIN_FAILURE: {
      const { text } = action.payload;
      return { ...state, err: text };
    }
    case USER_OAUTH_LOGIN_SUECCESS: {
      const { user_id } = action.payload;
      console.log(user_id);
      return { ...state, user_id };
    }
    case USER_LOGOUT:
      return { ...inintialAuthState };
    default:
      return state;
  }
};
export default reducer;
