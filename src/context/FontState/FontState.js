import { useFonts } from "expo-font";

export default () => {
  const [fontsLoaded] = useFonts({
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    SarabunMedium: require("../../../assets/fonts/Sarabun-Medium.ttf"),
    NunitoSansBold: require("../../../assets/fonts/NunitoSans-Bold.ttf"),
    MontserratRegular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
  });
  console.log("fonts loaded ===", fontsLoaded);

  return {
    fontsLoaded,
  };
};
