import Axios from "axios";
import url from "./url";

type Props = {
  user_id: number;
  category_id: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const editCategory = async (data: Props): Promise<any> => {
  const opt = {
    headers: {
      withCredentials: true,
      "Content-Type": "application/json",
    },
  };
  return await Axios.patch(`${url}/links/categories`, data, opt);
};

export default editCategory;
