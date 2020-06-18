import styled from "styled-components/native";

type Props = {
  width: number;
};

export const CategoryModal = styled.View`
  position: absolute;
  align-self: center;
  margin-vertical: 80px;
  bottom: 0px;
  height: 70%;
  border-radius: 16px;
  width: 98%;
  background-color: #fff;
`;

// margin-top: ${(props: Props) => (props.OS === "ios" ? "140px" : "80px")};
