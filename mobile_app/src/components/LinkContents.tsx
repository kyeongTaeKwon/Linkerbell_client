import React from "react";
import { Url } from "../models/UrlStateTypes";
import { Img, FakeImg } from "../styles/listStyles/LinkImg";
import { Linking } from "expo";
import { truncate } from "lodash";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FlatList, View, Dimensions } from "react-native";
import styled from "../styles/listStyles/index";
const { Desc, NewDot, Title, _Url, Tag } = styled;

type Props = {
  data: Url;
  isSwipe: boolean;
};

const LinkContents = ({ data, isSwipe }: Props): JSX.Element => {
  const sliceText = (text: string, length: number) => {
    return truncate(text, { length });
  };

  const renderDesc = (description?: string): JSX.Element | void => {
    if (description) {
      return <Desc>{sliceText(description, 20)}</Desc>;
    }
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
    return { marginLeft: 28, width, minHeight: 100 };
  };

  const renderNewDot = (isNew: boolean) => {
    if (isNew) {
      return <NewDot />;
    }
  };
  return (
    <View>
      <TouchableWithoutFeedback
        style={renderLinkDataBoxStyle()}
        onPress={() => !isSwipe && Linking.openURL(data.url)}
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
      </TouchableWithoutFeedback>
    </View>
  );
};
export default LinkContents;
