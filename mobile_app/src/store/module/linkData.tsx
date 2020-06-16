/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  ListState,
  Category,
  ResponUrlRequest,
  Category_url_list,
} from "../../models/UrlStateTypes";

//1. 액션 함수
export const FETCH_CATEGORY_DATA = "FETCH_CATEGORY_DATA" as const;
export const FETCH_ALL_LIST = "FETCH_ALL_LIST" as const;
export const FETCH_ALL_LIST_REQUEST = "FETCH_ALL_LIST_REQUEST" as const;
export const FETCH_CATEGORIES_URL_LIST = "FETCH_CATEGORIES_URL_LIST" as const;

//2 .생성자 (영수증)
export const fetchCategories = (categoryData: Category[]) => ({
  type: FETCH_CATEGORY_DATA,
  payload: { categoryData },
});
export const fetchAllListRequest = () => ({
  type: FETCH_ALL_LIST_REQUEST,
});

export const fetchAllUrlList = (AllList: ResponUrlRequest) => ({
  type: FETCH_ALL_LIST,
  payload: { AllList },
});
export const fetchCategoriesUrlList = (
  categories_url_list: Category_url_list,
) => ({
  type: FETCH_CATEGORIES_URL_LIST,
  payload: { categories_url_list },
});

export const initialLinkDataState: ListState = {
  categories: [],
  categories_url_list: {},
  all_category_url_list: [],
  all_tag_list: [],
};

// categories_list: {1:[],2[],3[]},
export type linkActions =
  | ReturnType<typeof fetchCategories>
  | ReturnType<typeof fetchAllListRequest>
  | ReturnType<typeof fetchAllUrlList>
  | ReturnType<typeof fetchCategoriesUrlList>;

const reducer = (state = initialLinkDataState, action: linkActions) => {
  switch (action.type) {
    case FETCH_CATEGORY_DATA: {
      return { ...state, categories: action.payload.categoryData };
    }
    case FETCH_ALL_LIST: {
      const { lists, tag_list } = action.payload.AllList;
      return { ...state, all_category_url_list: lists, all_tag_list: tag_list };
    }
    case FETCH_CATEGORIES_URL_LIST: {
      const { categories_url_list } = action.payload;
      return { ...state, categories_url_list };
    }
    default:
      return state;
  }
};

export default reducer;
