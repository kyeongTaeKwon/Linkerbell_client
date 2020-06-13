import React from "react";
import { Linking } from "expo";
import { truncate } from "lodash";
import { FlatList, Platform } from "react-native";
import { Url } from "../models/UrlStateTypes";
import { LinkBox } from "../styles/listStyles/Linkbox";
import { Title } from "../styles/listStyles/LinkTitle";
import { Desc } from "../styles/listStyles/LinkDesc";
import { _Url } from "../styles/listStyles/LinkUrl";
import { Tag } from "../styles/listStyles/LinkTag";
import { Img } from "../styles/listStyles/LinkImg";
const link = ({ data }: Url): JSX.Element => {
  const sliceText = (text: string, length: number) => {
    return truncate(text, { length });
  };
  return (
    <LinkBox>
      <Title
        onPress={() => Linking.openURL(data.url)}
        adjustsFontSizeToFit={true}
        numberOfLines={1}
        minimumFontScale={0.01}
      >
        {sliceText(data.title, 21)}
      </Title>
      <Desc>{sliceText(data.text, 20)}</Desc>
      <_Url>{sliceText(data.url, 36)}</_Url>
      <FlatList
        data={data.tags}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        scrollEnabled={false}
        keyExtractor={(item) => item.url_id}
        renderItem={({ item }) => <Tag>{item}</Tag>}
      />
      <Img
        source={{
          uri: "https://picsum.photos/200/300",
        }}
      />
    </LinkBox>
  );
};

export default link;
