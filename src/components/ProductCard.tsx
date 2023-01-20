import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import tw from "twrnc";

interface IProductProps {
  imageUrl: string;
  title: string;
  price: string;
}
const ProductCard = ({ imageUrl, price, title }: IProductProps) => {
  return (
    <View style={tw`h-60 w-[50%] shadow-xl mb-15 my-8 px-2`}>
      <View style={tw`h-full w-full rounded-xl overflow-hidden `}>
        <Image
          style={tw`w-full h-full`}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View>
        <Text style={tw`text-gray-500 mt-2 capitalize`}>{title}</Text>
        <Text style={tw`text-gray-900 font-bold mt-1 capitalize`}>{price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
