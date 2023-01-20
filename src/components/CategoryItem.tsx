import { Text, Pressable } from "react-native";
import React, { ReactNode } from "react";
import tw from "twrnc";

interface CategoryItemProp {
  Icon: ReactNode;
  title: string;
}
const CategoryItem = ({ Icon, title }: CategoryItemProp) => {
  return (
    <Pressable style={tw`items-center flex-0 mr-5`}>
      {Icon}
      <Text style={tw`capitalize mt-1`}>{title}</Text>
    </Pressable>
  );
};

export default CategoryItem;
