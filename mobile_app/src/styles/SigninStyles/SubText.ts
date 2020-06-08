import styled from "styled-components/native";

type Props = {
  danger?: boolean;
};
export const SubText = styled.Text`
  padding: 0px;
  margin: 0px;
  font-family: "NMedium";
  background-color: transparent;
  font-size: ${(props: Props) => (props.danger === true ? "16px" : "21px")};
  margin-left: 56px;
  margin-top: ${(props: Props) => (props.danger === true ? "63.5px" : "56px")};
  color: ${(props: Props) => (props.danger === true ? "#ff2222" : "#000")};
  border-width: 0px;
`;
