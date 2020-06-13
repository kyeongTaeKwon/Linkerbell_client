import React from "react";
import { Text, Dimensions } from "react-native";
import Modal from "react-native-modal";
import styled from "../styles/LinkModalStyles/index";
import postUrl from "../core/apis/postUrl";
import useServices from "../hooks/useServices";

const { LinkAddBtn, LinkModal, MainText, SubText } = styled;
type Props = {
  isVisible: boolean;
  toggleModal: () => void;
};

const AddLinkModal = ({ isVisible, toggleModal }: Props): JSX.Element => {
  const { copiedUrl } = useServices();
  const handlePress = async () => {
    try {
      await postUrl(copiedUrl);
      toggleModal();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
      <LinkModal width={Dimensions.get("window").width}>
        <MainText>클립보드에 저장된 링크를 추가할까요?</MainText>
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
