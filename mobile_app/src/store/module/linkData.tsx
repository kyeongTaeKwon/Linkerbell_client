import { ListState } from "../../models/UrlStateTypes";

export const initialLinkDataState: ListState = {
  categories: [
    { category_id: 1, isnew: 1, count: 12 },
    { category_id: 2, isnew: 0, count: 8 },
    { category_id: 3, isnew: 0, count: 5 },
    { category_id: 4, isnew: 1, count: 3 },
  ],
  all_category_url_list: [],
  all_tag_list: [],
};
