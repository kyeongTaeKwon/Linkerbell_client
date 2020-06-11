/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { produce } from "immer";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST" as const;
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE" as const;
export const USER_LOGOUT = "USER_LOGOUT" as const;
export const USER_SIGNUP_REQUEST = "USER_SIGNUP_REQUEST" as const;
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS" as const;
export const USER_SIGNUP_FAILURE = "USER_SIGNUP_FAILURE" as const;
export const USER_PROFILE = "USER_PROFILE" as const;
export const USER_OAUTH_LOGIN_SUECCESS = "USER_OAUTH_LOGIN_SUECESS" as const;

type authState = {
  user_id: number;
  age?: number;
  gender?: number;
  isLogin: boolean;
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

export const signup = (signupValue: value) => ({
  type: USER_SIGNUP_REQUEST,
  payload: { signupValue },
});

export const userSignupSuccess = (userInfo: authState) => ({
  type: USER_SIGNUP_SUCCESS,
  payload: { userInfo },
});

export const userSignupFailure = (text: string) => ({
  type: USER_SIGNUP_FAILURE,
  payload: {
    text,
  },
});

export const profileUpdate = () => ({
  type: USER_PROFILE,
});

const initialAuthState: authState = {
  user_id: -1,
  age: 0,
  gender: 0,
  isLogin: false,
  err: "",
};
export type authActions =
  | ReturnType<typeof callLoginAPi>
  | ReturnType<typeof userLoginSuccess>
  | ReturnType<typeof userLoginFailure>
  | ReturnType<typeof userLogout>
  | ReturnType<typeof signup>
  | ReturnType<typeof userSignupSuccess>
  | ReturnType<typeof userSignupFailure>
  | ReturnType<typeof profileUpdate>
  | ReturnType<typeof oauthLoginSuccess>;

const reducer = (state = initialAuthState, action: authActions) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const { user_id, age, gender } = action.payload.userInfo;
      return { ...state, user_id, isLogin: true, age, gender };
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
      return { ...initialAuthState };
    case USER_SIGNUP_SUCCESS: {
      const { user_id } = action.payload.userInfo;
      return { ...state, user_id };
    }
    case USER_SIGNUP_FAILURE: {
      const { text } = action.payload;
      return { ...state, err: text };
    }
    case USER_PROFILE: {
      return { ...initialAuthState };
    }
    default:
      return state;
  }
};
export default reducer;
