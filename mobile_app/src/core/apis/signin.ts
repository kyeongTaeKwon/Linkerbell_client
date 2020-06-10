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
  const opt = {
    headers: {
      withCredentials: true,
      "Content-Type": "application/json",
    },
  };
  return await Axios.post(`${url}/users/signin`, data, opt);
};

// const SignInRequest = async (data: LoginProps) => {
//   const options = {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json;charset=UTF-8",
//     },
//     body: JSON.stringify(data),
//   };
//   const response = await fetch(url, options);
//   const responseOK = response && response.ok;
//   if (responseOK) {
//     const data = await response.json();
//     console.log(data);
//   }
// };
export default SignInRequest;
