import styled from "styled-components/native";

type Props = {
  isEmpty?: boolean;
};
export const Btn = styled.TouchableOpacity`
  width: 260px;
  height: 60px;
  background-color: ${(props: Props) =>
    props.isEmpty ? "#9e9e9e" : "#FFD93B"};
  border-radius: 4px;
  align-items: center;
  align-self: center;
  margin-top: 220px;
`;

export const BtnText = styled.Text`
  font-family: "NBold";
  font-size: 20px;
  line-height: 30px;
  color: ${(props: Props) => (props.isEmpty ? "#fff" : "#1e1e1e")};
  margin-top: 16px;
`;
