import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import useLinkData from "../hooks/useLinkData";
import styled from "../styles/EditTagModal/ETStyleIndex";
import editTagRequest from "../core/apis/editTag";
import { Url } from "../models/UrlStateTypes";
const { TagModal, InputForm, InputWrapper, HashTag, AddBtn, Tag } = styled;

type Props = {
  isVisible: boolean;
  toggleModal: () => void;
  currentLink: Url;
};
const EditTagModal = ({
  isVisible,
  toggleModal,
  currentLink,
}: Props): JSX.Element => {
  const [tagText, setTagText] = useState("");
  const [link, setLink] = useState<Url>(currentLink);
  const { onAddTag } = useLinkData();

  useEffect(() => {
    setLink(currentLink);
  }, [currentLink]);

  const handlePress = async () => {
    const { id, tags } = currentLink;
    const tags_list = [...tags, tagText];
    console.log(tagText, tags_list, id);
    try {
      if (tagText !== "" && tags.length < 3) {
        await editTagRequest({ id, tags: tags_list });
        setLink({ ...link, tags: tags_list });
        await onAddTag(id, tags_list);
      }
    } catch (e) {
      console.log(e);
    } finally {
      await setTagText("");
    }
  };
  const renderTags = () => {
    if (link && link.tags) {
      return (
        <FlatList
          data={link.tags}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
          scrollEnabled={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Tag>{item}</Tag>}
        />
      );
    }
  };
  return (
    <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
      <TagModal>
        <InputWrapper>
          <HashTag>#</HashTag>
          <InputForm
            placeholder="태그를 입력해주세요"
            placeholderTextColor="#6c6c6c"
            onChangeText={(val) => setTagText(val)}
            value={tagText}
          />
          <TouchableOpacity onPress={handlePress}>
            <AddBtn>
              <Text
                style={{
                  alignSelf: "center",
                  lineHeight: 20,
                  marginTop: 11,
                  fontFamily: "NBold",
                }}
              >
                추가
              </Text>
            </AddBtn>
          </TouchableOpacity>
        </InputWrapper>
        <View style={{ marginLeft: 28, marginTop: 20 }}>{renderTags()}</View>
      </TagModal>
    </Modal>
  );
};

export default EditTagModal;
