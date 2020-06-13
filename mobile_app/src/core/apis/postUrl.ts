import Axios from "axios";
import url from "./url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postUrl = async (link: string): Promise<any> => {
  const data = {
    url: link,
  };
  try {
    const res = await Axios.post(`${url}/links/`, data);
    console.log(res.data);
    return res.data.category_id;
  } catch (e) {
    console.log(e);
  }
};

export default postUrl;
