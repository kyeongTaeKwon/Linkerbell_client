import Axios from "axios";
import url from "./url";
const sendFavoriteRequest = async (url_id: number): Promise<any> => {
  const data = {
    url_id,
  };
  return await Axios.patch(`${url}/links/favorite`, data);
};

export default sendFavoriteRequest;
