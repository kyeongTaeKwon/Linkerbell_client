import React, { useState } from "react";
import { Text, Dimensions } from "react-native";
import Modal from "react-native-modal";
import styled from "../styles/LinkModalStyles/index";
import postUrl from "../core/apis/postUrl";
import useServices from "../hooks/useServices";
import { _getContent } from "../core/utils/getClipboard";
import { validateUrl } from "../core/utils/validateUrl";
import useLinkData from "../hooks/useLinkData";

const { LinkAddBtn, LinkModal, MainText, SubText } = styled;
type Props = {
  isVisible: boolean;
  toggleModal: () => void;
  onReload: () => void;
};

const AddLinkModal = ({
  isVisible,
  toggleModal,
  onReload,
}: Props): JSX.Element => {
  const { copiedUrl } = useServices();
  const { fetchAllList } = useLinkData();
  const handlePress = async () => {
    try {
      await postUrl(copiedUrl);
      await onReload();
      toggleModal();
      await fetchAllList();
    } catch (e) {
      console.log(e);
    }
  };

  const renderMessage = async () => {
    try {
      let message;
      const url = await _getContent();
      console.log(url);
      if (url) {
        const result = await validateUrl(url);
        if (result) {
          message = "클립보드에 저장된 링크를 추가할까요?";
        }
      } else {
        message =
          "클립보드에 저장된 링크가 없습니다.\
      링크를 복사해 주세요";
      }
      console.log(message);
      return message;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
      <LinkModal width={Dimensions.get("window").width}>
        <MainText onPress={() => renderMessage()}>
          클립보드에 저장된 링크를 추가할까요?
        </MainText>
        <SubText>
          북마크에 글을 추가 하시면 {"\n"}링커벨이 카테고리를 분류해드릴게요
        </SubText>
        <LinkAddBtn onPress={handlePress}>
          <Text style={{ fontFamily: "NBold", fontSize: 17 }}>추가</Text>
        </LinkAddBtn>
      </LinkModal>
    </Modal>
  );
};
export default AddLinkModal;
