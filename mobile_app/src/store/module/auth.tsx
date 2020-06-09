/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const USER_LOGIN = "USER_LOGIN" as const;
export const USER_LOGOUT = "USER_LOGOUT" as const;

type authState = {
  user_id: number;
  age?: number;
  gender?: number;
};
export const userLogin = (userInfo: authState) => ({
  type: USER_LOGIN,
  payload: {
    userInfo,
  },
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

const inintialAuthState: authState = {
  user_id: 0,
  age: 0,
  gender: 0,
};
type authActions = ReturnType<typeof userLogin> | ReturnType<typeof userLogout>;

const reducer = (state = inintialAuthState, action: authActions) => {
  switch (action.type) {
    case USER_LOGIN: {
      const { user_id, age, gender } = action.payload.userInfo;
      return { user_id, age, gender };
    }
    case USER_LOGOUT:
      return { ...inintialAuthState };
    default:
      return state;
  }
};
export default reducer;
