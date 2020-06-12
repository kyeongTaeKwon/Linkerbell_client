import styled from "styled-components/native";
type ContainerProps = {
  OS: string;
};
export const Container = styled.View`
  flex: 1;
  padding-top: ${(props: ContainerProps) =>
    props.OS === "ios" ? "100px" : "60px"};
  background-color: #fff;
`;
