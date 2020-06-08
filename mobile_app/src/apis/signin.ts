import Axios from "axios";
import url from "./url";
type LoginProps = {
  email: string;
  password: string;
};
type Response = {
  user_id: number;
  age: number;
  gender: number;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SignInRequest = async (data: LoginProps): Promise<any> => {
  return await Axios.post(`${url}/users/signin`, data);
};

export default SignInRequest;
