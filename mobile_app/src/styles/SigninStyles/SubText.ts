import styled, { css } from "styled-components/native";

type Props = {
  danger?: boolean;
  OS: string;
};

const calcMargin = (os: string, danger?: boolean) => {
  let margin = 28;
  if (danger) margin = 32;
  if (os === "ios") margin *= 1.5;
  return margin;
};
const adjustMarginByOS = (os: string, danger?: boolean) => css`
  margin-top: ${calcMargin(os, danger)}px;
`;
export const SubText = styled.Text`
  padding: 0px;
  margin: 0px;
  font-family: "NMedium";
  background-color: transparent;
  font-size: ${(props: Props) => (props.danger === true ? "16px" : "21px")};
  margin-left: 56px;
  ${(props: Props) => adjustMarginByOS(props.OS, props.danger)};
  color: ${(props: Props) => (props.danger === true ? "#ff2222" : "#000")};
  border-width: 0px;
`;
