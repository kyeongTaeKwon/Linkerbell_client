import styled from "styled-components/native";

type Props = {
  isClicked?: boolean;
};

export const SearchInput = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  background-color: transparent;
  margin-left: 10px;
  font-size: 18px;
  max-width: 90px;
`;

export const SearchContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 11px;
  height: 36px;
  max-width: 130px;
  left: 90px;
`;

// background-color: ${(props: Props) =>
//     props.isClicked ? "#fafafa" : "transparent"};
