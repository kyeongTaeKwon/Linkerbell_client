interface Category {
  name: string;
  emoji: string;
  [index: number]: any;
}

interface Categories {
  [index: number]: Category;
}

export const renderCategoryText = (category_id: number): Categories => {
  const category_object: Categories = {
    1: { name: "문화·예술", emoji: "🎨" },
    2: { name: "자동차", emoji: "🚙" },
    3: { name: "비즈니스", emoji: "💼" },
    4: { name: "교육·Job", emoji: "🧑‍🏫" },
    5: { name: "가족", emoji: "👨‍👩‍👧‍👦" },
    6: { name: "경제·부동산", emoji: "📈" },
    7: { name: "여행·맛집", emoji: "🥘" },
    8: { name: "취미·운동", emoji: "🤸‍♀️" },
    9: { name: "생활", emoji: "🏡" },
    10: { name: "법률·정치·사회", emoji: "⚖️" },
    11: { name: "종교", emoji: "🙏" },
    12: { name: "과학·IT", emoji: "🧑‍💻" },
    13: { name: "쇼핑·패션", emoji: "🛍️" },
    14: { name: "스포츠", emoji: "⚽️" },
  };
  return category_object[category_id];
};
