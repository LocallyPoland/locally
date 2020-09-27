import React from "react";
import { Image } from "react-native";
import s from "./CustomImage.s";

const CustomImage = ({ width, height, style = {}, ...rest }) => {
  return <Image style={{ width, height, ...s.image, ...style }} {...rest} />;
};

export default CustomImage;
