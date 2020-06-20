import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import useLinkData from "../hooks/useLinkData";
import styled from "../styles/DeleteCategoryModal/index";
import deleteLink from "../core/apis/deleteLink";
import { Url } from "../models/UrlStateTypes";
import deleteLinkApi from "../core/apis/deleteLink";
import fetchCategoryRequest from "../core/apis/fetchCategory";
import sortCategory from "../core/utils/sortCategory";
const { DeleteModal, ButtonWrapper, Link, Title } = styled;

type Props = {
  isVisible: boolean;
  toggleModal: () => void;
  currentLinkId: number;
};

const DeleteLinkModal = ({
  isVisible,
  toggleModal,
  currentLinkId,
}: Props): JSX.Element => {
  const { onDeleteLink, onHome } = useLinkData();

  const handlePress = async () => {
    try {
      onDeleteLink(currentLinkId);
      await deleteLinkApi(currentLinkId);
      toggleModal();
      const categories = await fetchCategoryRequest();
      await sortCategory(categories);
      onHome(categories);

      //? toggle false 모달 닫히게
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
      <DeleteModal>
        <Title>이 글을 삭제하시겠습니까?</Title>
        <Link>음식이 맛있는 제주도 맛집</Link>
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
