import { ListState, Category } from "../../models/UrlStateTypes";
//1. 액션
export const FETCH_CATEGORY_DATA = "FETCH_CATEGORY_DATA" as const;
//2 .생성자

export const fetchCategories = (data: Category) => ({
  type: FETCH_CATEGORY_DATA,
  payload: { data },
});

export const initialLinkDataState: ListState = {
  categories: [],
  all_category_url_list: [],
  all_tag_list: [],
};
