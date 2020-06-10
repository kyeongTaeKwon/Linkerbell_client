/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { produce } from "immer";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST" as const;
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILURE" as const;
export const USER_LOGOUT = "USER_LOGOUT" as const;
export const USER_SIGNUP_REQUEST = "USER_SIGNUP_REQUEST" as const;
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS" as const;
export const USER_SIGNUP_FAILURE = "USER_SIGNUP_FAILURE" as const;
export const USER_PROFILE = "USER_PROFILE" as const;

type authState = {
  user_id: number;
  age?: number;
  gender?: number;
  err: string;
};

type value = {
  email: string;
  password: string;
};

export const callLoginAPi = (userInfo: value) => ({
  type: USER_LOGIN_REQUEST,
  payload: { userInfo },
});

export const userLoginSuccess = (userInfo: authState) => ({
  type: USER_LOGIN_SUCCESS,
  payload: { userInfo },
});

export const userLoginFailure = (text: string) => ({
  type: USER_LOGIN_FAILED,
  payload: {
    text,
  },
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

export const profileUpdate = (userInfo: authState) => ({
  type: USER_PROFILE,
  payload: { userInfo },
});

const inintialAuthState: authState = {
  user_id: 0,
  age: 0,
  gender: 0,
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
  | ReturnType<typeof profileUpdate>;

const reducer = (state = inintialAuthState, action: authActions) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const { user_id, age, gender } = action.payload.userInfo;
      return { ...state, user_id, age, gender };
    }
    case USER_LOGIN_FAILED: {
      const { text } = action.payload;
      return { ...state, err: text };
    }
    case USER_LOGOUT:
      return { ...inintialAuthState };
    case USER_SIGNUP_SUCCESS: {
      const { user_id } = action.payload.userInfo;
      return { ...state, user_id };
    }
    case USER_SIGNUP_FAILURE: {
      const { text } = action.payload;
      return { ...state, err: text };
    }
    case USER_PROFILE: {
      const { age, gender } = action.payload.userInfo;
      return { ...state, age, gender };
    }
    default:
      return state;
  }
};
export default reducer;
