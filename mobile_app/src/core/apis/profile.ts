import Axios from "axios";
import url from "./url";

type ProfileProps = {
  user_id: number;
  age?: React.ReactText;
  gender?: React.ReactText;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProfileRequest = async (data: ProfileProps): Promise<any> => {
  const opt = {
    headers: {
      withCredentials: true,
      "Content-Type": "application/json",
    },
  };
  //! patch, query string NO
  //   return await Axios.put(`${url}/users/profile`, data, opt);
  return await Axios.patch(`${url}/users/profile`, data, opt);
};

export default ProfileRequest;

///users/profile/${user_id}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
// const SignUpRequest = async (data: SignUpProps): Promise<any> => {
//     const opt = {
//       headers: {
//         withCredentials: true,
//         "Content-Type": "application/json",
//       },
//     };
//     try {
//       let res = await axios.put(`${url}/users/signup`, data, opt);
//       if (res.status === 200) {
//       }
//     } catch (error) {
//         console.error(error);
//     } finally {

//     }
//     return await axios.post(`${url}/users/signup`, data, opt);
//   };
