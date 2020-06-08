import styled from "styled-components/native";

type Props = {
  OS: string;
};
export const LoginBtn = styled.TouchableHighlight`
  width: 259px;
  height: 52px;
  margin-top: 24px;
  border-width: 2px;
  border: 2px;
  border-radius: 4px;
  align-items: center;
`;
export const LoginLabel = styled.Text`
  font-family: "NMedium";
  margin-top: ${(props: Props) => (props.OS === "ios" ? "8px" : "0px")};
  font-size: 20px;
  color: #000;
`;
export const LinkToBox = styled.View`
  flex-direction: row;
  margin-top: 32px;
  align-items: center;
`;
export const LinkToSignUp = styled.TouchableWithoutFeedback`
  color: #000;
`;
export const LinkToLabel = styled.Text`
  font-family: "NBold";
  margin-left: 10px;
  font-size: 16px;
  color: #000;
`;
