import React from "react";
import { Text, Dimensions } from "react-native";
import Modal from "react-native-modal";
import styled from "../styles/LinkModalStyles/index";
import postUrl from "../core/apis/postUrl";
import useServices from "../hooks/useServices";
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
  const renderMessage = () => {
    //! _getContent 의 리턴값이 빈스트링이 아니라면
    //! 리턴값이 url 유효성 검증을 통과 했다면
    // 클립보드에 저장된 링크를 추가할까요?
    //else 링크를 복사해주세요
    //return msg
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
