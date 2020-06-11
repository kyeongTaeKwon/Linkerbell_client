import Axios from "axios";
import url from "./url";
const fetchListApiRequest = async (data): Promise<any> => {
  const { user_id, category_id } = data;
  return Axios.get(
    `${url}/links/category-list?user_id=${user_id}&category_id=${category_id}`,
  );
};

export default fetchListApiRequest;
