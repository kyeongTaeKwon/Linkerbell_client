import Axios from "axios";
import url from "./url";
const fetchCategoryRequest = async (data): Promise<any> => {
  const { user_id } = data;
  return Axios.get(`${url}/links/home?user_id=${user_id}`);
};

export default fetchCategoryRequest;
