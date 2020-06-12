export type Url = {
  url_id: number;
  url: string;
  title: string;
  text: string;
  image?: string;
  favorite: 0 | 1;
  isnew: 0 | 1;
  tags: string[] | [];
  category_id: number;
};
export type Category = {
  category_id: number;
  isnew: 0 | 1;
  count: number;
};
export type Category_url_list = {
  [key: string]: Url[];
};

export type ListState = {
  categories: Category[]; //HOME API
  all_category_url_list: Url[]; // All links list
  all_tag_list: string[];
  // cur_category_tag_list: string[];
  // cur_category_url_list: Category_url_list; //category links list
  // current_category: number; // 0~14
};
