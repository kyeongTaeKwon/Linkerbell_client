import React, { useState } from "react";
import { Url } from "../models/UrlStateTypes";
import { View } from "react-native";
import SwipeLink from "../components/SwipeLink";
import FavoriteBtn from "../components/FavoriteBtn";
import LinkContents from "../components/LinkContents";
import { LinkBox } from "../styles/listStyles/Linkbox";
type Props = {
  data: Url;
};
const link = ({ data }: Props): JSX.Element => {
  const [isSwipe, setSwipe] = useState(false);

  const handleSwipe = (bool: boolean): void => {
    setSwipe(bool);
  };
  return (
    <View>
      <SwipeLink setSwipe={handleSwipe}>
        <LinkBox>
          <FavoriteBtn data={data} />
          <LinkContents data={data} isSwipe={isSwipe} />
        </LinkBox>
      </SwipeLink>

      <View
        style={{
          backgroundColor: "green",
          position: "absolute",
          width: 375,
          height: 100,
          maxHeight: 130,
          zIndex: -1,
          // borderRadius: 12,
        }}
      ></View>
    </View>
  );
};

export default link;
