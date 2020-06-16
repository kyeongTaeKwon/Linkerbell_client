import { Clipboard } from "react-native";

export const _getContent = async (): string => {
  const content = await Clipboard.getString();
  return content;
};
