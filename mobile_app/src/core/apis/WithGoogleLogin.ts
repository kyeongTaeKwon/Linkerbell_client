import * as Google from "expo-google-app-auth";
import { googleKey } from "../../../config";
const signInWithGoogleAsync = async (): Promise<any> => {
  try {
    const result = await Google.logInAsync({
      androidClientId: googleKey.AndroidKey,
      iosClientId: googleKey.iosKey,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      const { email } = result.user;
      return email;
    } else {
      return "login cancel";
    }
  } catch (e) {
    return "login cancel";
  }
};

export default signInWithGoogleAsync;
