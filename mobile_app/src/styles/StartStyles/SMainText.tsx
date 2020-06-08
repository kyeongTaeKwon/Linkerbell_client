import styled from "styled-components/native";

type Props = {
  height: number;
};
export const MainText = styled.Text`
  font-size: 40px;
  font-family: "NBold";
  margin-bottom: ${(props: Props) => props.height - 600 + "px"};
  align-self: center;
`;
