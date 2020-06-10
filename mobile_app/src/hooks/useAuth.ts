import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/module/index";
import { callLoginAPi } from "../store/module/auth";
import { useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useAuth() {
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  const age = useSelector((state: RootState) => state.auth.age);
  const gender = useSelector((state: RootState) => state.auth.gender);
  const err = useSelector((state: RootState) => state.auth.err);
  const dispatch = useDispatch();

  const onLogin = useCallback(
    (userInfo) => {
      dispatch(callLoginAPi(userInfo));
    },
    [dispatch],
  );

  return {
    user_id,
    age,
    gender,
    err,
    onLogin,
  };
}
