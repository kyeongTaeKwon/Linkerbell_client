import { ListState, Category } from "../../models/UrlStateTypes";

export const FETCH_CATEGORY_DATA = "FETCH_CATEGORY_DATA" as const;

export const fetchCategories = (data: Category) => ({
  type: FETCH_CATEGORY_DATA,
  payload: { data },
});

export const initialLinkDataState: ListState = {
  categories: [],
  all_category_url_list: [],
  all_tag_list: [],
};
