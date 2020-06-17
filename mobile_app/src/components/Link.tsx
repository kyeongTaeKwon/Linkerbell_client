import React, { useState } from "react";
import { Linking } from "expo";
import { truncate } from "lodash";
import { FlatList, View, TouchableOpacity, Dimensions } from "react-native";
import { Url } from "../models/UrlStateTypes";
import { LinkBox } from "../styles/listStyles/Linkbox";
import { Title } from "../styles/listStyles/LinkTitle";
import { Desc } from "../styles/listStyles/LinkDesc";
import { _Url } from "../styles/listStyles/LinkUrl";
import { Tag } from "../styles/listStyles/LinkTag";
import { NewDot } from "../styles/listStyles/LinkNewDot";
import { Img, FakeImg } from "../styles/listStyles/LinkImg";
import { AntDesign } from "@expo/vector-icons";
import useLinkData from "../hooks/useLinkData";
import sendFavoriteRequest from "../core/apis/favorite";

const link = ({ data }: Url): JSX.Element => {
  // const [lastTap, setLastTap] = useState<number>(Date.now());
  const { onFavoriteBtnPress } = useLinkData();
  const sliceText = (text: string, length: number) => {
    return truncate(text, { length });
  };

  const renderDesc = (description: string): JSX.Element | void => {
    return <Desc>{sliceText(description, 20)}</Desc>;
  };

  const renderImage = (): JSX.Element => {
    if (data.og_image) {
      return (
        <Img
          source={{
            uri: `${data.og_image}`,
          }}
        />
      );
    } else {
      return <FakeImg />;
    }
  };
  const renderLinkDataBoxStyle = () => {
    const width = Dimensions.get("window").width - 80;
    return { marginLeft: 28, width };
  };
  // const handleDoubleTap = (url_id: number, favorite: boolean) => {
  //   const now = Date.now();
  //   const DOUBLE_PRESS_DELAY = 300;
  //   if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
  //     handleFavoriteDoublePress(url_id, favorite);
  //   } else {
  //     setLastTap(now);
  //     // lastTap = now;
  //   }
  // };
  const handleFavoriteBtnPress = async (linkData: Url) => {
    const { id, favorite } = linkData;
    try {
      sendFavoriteRequest(id, favorite);
      await onFavoriteBtnPress(linkData);
      console.log("여기!!!!!!!!!!!!!!1");
    } catch (e) {
      console.log(e);
    }
  };
  const renderNewDot = (isNew: boolean) => {
    if (isNew) {
      return <NewDot />;
    }
  };
  return (
    <LinkBox>
      <TouchableOpacity
        onPress={() => handleFavoriteBtnPress(data)}
        style={{ width: 40 }}
      >
        <AntDesign
          name={data.favorite ? "star" : "staro"}
          size={20}
          style={{
            position: "relative",
            left: 20,
            width: 40,
            height: 40,
            top: 15,
            color: `${data.favorite ? "#ffd93b" : "#dedede"}`,
          }}
        />
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          style={renderLinkDataBoxStyle()}
          onPress={() => Linking.openURL(data.url)}
        >
          {renderNewDot(data.isnew)}
          <Title
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            minimumFontScale={0.01}
          >
            {sliceText(data.og_title, 17)}
          </Title>
          {data.og_description !== "" && renderDesc(data.og_description)}
          <_Url>{sliceText(data.url, 36)}</_Url>
          <FlatList
            data={data.tags}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0 }}
            scrollEnabled={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Tag>{item}</Tag>}
          />
          {renderImage()}
        </TouchableOpacity>
      </View>

    </LinkBox>
  );
};

export default link;
