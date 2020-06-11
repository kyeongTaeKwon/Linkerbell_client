import * as Google from "expo-google-app-auth";

const signInWithGoogleAsync = async (): Promise<any> => {
  try {
    const result = await Google.logInAsync({
      // behavior: "web",
      androidClientId:
        "147556589644-04r747fl2tqmt9bi5og8cuk73rm38f8u.apps.googleusercontent.com",
      iosClientId:
        "147556589644-kh89d71eo39krfuj4aj8s8ml3psh6do5.apps.googleusercontent.com",
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
