import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import useLinkData from "../hooks/useLinkData";
import styled from "../styles/DeleteCategoryModal/index";
import { Url } from "../models/UrlStateTypes";
import deleteLinkApi from "../core/apis/deleteLink";
import fetchCategoryRequest from "../core/apis/fetchCategory";
import sortCategory from "../core/utils/sortCategory";
const { DeleteModal, ButtonWrapper, Link, Title } = styled;

type Props = {
  isVisible: boolean;
  toggleModal: () => void;
  currentLink: Url;
};

const DeleteLinkModal = ({
  isVisible,
  toggleModal,
  currentLink,
}: Props): JSX.Element => {
  const { onDeleteLink, onHome } = useLinkData();
  const [link, setLink] = useState<Url>(currentLink);

  useEffect(() => {
    setLink(currentLink);
  }, [currentLink]);

  const handlePress = async () => {
    const { id } = link;
    try {
      onDeleteLink(id);
      await deleteLinkApi(id);
      toggleModal();
      const categories = await fetchCategoryRequest();
      await sortCategory(categories);
      onHome(categories);
    } catch (error) {
      console.log(error);
    }
  };

  const renderTitle = () => {
    if (link && link.og_title) {
      const { og_title } = link;
      return og_title;
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
      <DeleteModal>
        <Title>이 글을 삭제하시겠습니까?</Title>
        <Link>{renderTitle()}</Link>
        <ButtonWrapper>
          <TouchableOpacity onPress={() => console.log("삭제버튼클릭")}>
            <Text style={styles.delete} onPress={handlePress}>
              삭제
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("취소버튼클릭")}>
            <Text style={styles.cancel} onPress={toggleModal}>
              취소
            </Text>
          </TouchableOpacity>
        </ButtonWrapper>
      </DeleteModal>
    </Modal>
  );
};

export default DeleteLinkModal;

const styles = StyleSheet.create({
  delete: {
    color: "#FF5E5E",
    fontSize: 15,
    fontFamily: "NMedium",
    letterSpacing: -0.3,
  },
  cancel: {
    color: "#000",
    fontSize: 15,
    fontFamily: "NMedium",
    letterSpacing: -0.3,
  },
});
