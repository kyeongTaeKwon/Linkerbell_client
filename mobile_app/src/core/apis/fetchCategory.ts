import Axios from "axios";
import url from "./url";
import fakeData from "../services/fakeData";
import { Category } from "../../models/UrlStateTypes";

// type Category = {
//   category_id: number;
//   isnew: 0 | 1;
//   count: number;
// };

const fetchCategoryRequest = async (): Promise<Category[]> => {
  // return await fakeData.home.data;

  try {
    const res = await Axios.get(`${url}/links/home`);
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }

  // return await (await Axios.get(`${url}/links/home`)).data;
};

export default fetchCategoryRequest;
