import styled from "styled-components/native";

type Platform = {
  OS?: string;
};
export const InputForm = styled.TextInput`
  font-family: "NMedium";
  font-size: ${(props: Platform) => (props.OS === "ios" ? "16px" : "14px")};
  padding: 0px;
  margin: 0px;
  margin-top: ${(props: Platform) => (props.OS === "ios" ? "12px" : "0px")};
  margin-left: 56px;
  border-width: 0px;
`;
