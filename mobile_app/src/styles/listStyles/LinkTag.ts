import styled from "styled-components/native";
type Props = {
  OS: string;
};
export const Tag = styled.Text`
  font-family: "NBold";
  margin-right: 8px;
  font-size: 13px;
  line-height: ${13 * 1.6}px;
  background-color: #f2f2f2;
  border-radius: 16px;
  padding: 10px;
  padding-bottom: 4px;
  padding-top: 2px;
  color: #c5c5c5;
  min-width: 44px;
  text-align: center;
  overflow: hidden;
`;
