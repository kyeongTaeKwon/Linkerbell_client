/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ListState, Category } from "../../models/UrlStateTypes";

//1. 액션 함수
export const FETCH_CATEGORY_DATA = "FETCH_CATEGORY_DATA" as const;
//2 .생성자 (영수증)
export const fetchCategories = (categoryData: Category[]) => ({
  type: FETCH_CATEGORY_DATA,
  payload: { categoryData },
});

export const initialLinkDataState: ListState = {
  categories: [],
  all_category_url_list: [],
  all_tag_list: [],
};

export type linkActions = ReturnType<typeof fetchCategories>;

const reducer = (state = initialLinkDataState, action: linkActions) => {
  switch (action.type) {
    case FETCH_CATEGORY_DATA: {
      return { ...state, categories: action.payload.categoryData };
    }
    default:
      return state;
  }
};

export default reducer;
