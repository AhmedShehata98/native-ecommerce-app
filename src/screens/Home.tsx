import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import IonicIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CategoryItem from "../components/CategoryItem";
import ProductCard from "../components/ProductCard";
import { navigationLinks } from "../../App";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: number;
  category: {
    id: number;
    name: string;
    image: number;
  };
  images: string[];
}
const Home = ({ navigation }: any) => {
  const API: string = "https://api.escuelajs.co/api/v1/products",
    [productsData, setProductsData] = useState<IProduct[]>([]),
    [isError, setIsError] = useState<boolean>(false),
    [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API),
          data = await res.json();
        setProductsData(data);
        setIsError(false), setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <StatusBar style="auto" animated />
      <SafeAreaView style={tw`w-full h-full mt-6 bg-gray-100`}>
        <View style={tw`flex-row justify-between items-center mb-8 my-4 px-2`}>
          <Pressable>
            <IonicIcons name="search-outline" size={28} color={"#777"} />
          </Pressable>
          <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-lg capitalize text-gray-500 leading-5 mb-0`}>
              make home
            </Text>
            <Text
              style={tw`text-xl uppercase text-gray-600 font-bold mb-0 mt-0 leading-5`}
            >
              beautiful
            </Text>
          </View>
          <Pressable>
            <IonicIcons name="ios-cart-outline" size={28} color={"#777"} />
          </Pressable>
        </View>
        <View style={tw`mt-2`}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`justify-between`}
          >
            <CategoryItem
              key={"1"}
              Icon={
                <IonicIcons
                  name="star"
                  style={tw`p-3 bg-stone-800 shadow-md rounded-xl w-min-c `}
                  size={30}
                  color="#fff"
                />
              }
              title="popular"
            />

            <CategoryItem
              key={"2"}
              Icon={
                <MaterialCommunityIcons
                  name="chair-rolling"
                  style={tw`p-3 bg-stone-800 shadow-md rounded-xl w-min-c `}
                  size={30}
                  color="#fff"
                />
              }
              title="chair"
            />
            <CategoryItem
              key={"3"}
              Icon={
                <MaterialCommunityIcons
                  name="guitar-electric"
                  style={tw`p-3 bg-stone-800 shadow-md rounded-xl w-min-c `}
                  size={30}
                  color="#fff"
                />
              }
              title="music"
            />
            <CategoryItem
              key={"4"}
              Icon={
                <Octicons
                  name="device-mobile"
                  style={tw`p-3 bg-stone-800 shadow-md rounded-xl w-min-c `}
                  size={30}
                  color="#fff"
                />
              }
              title="mobile"
            />
            <CategoryItem
              key={"5"}
              Icon={
                <MaterialCommunityIcons
                  name="car-sports"
                  style={tw`p-3 bg-stone-800 shadow-md rounded-xl w-min-c `}
                  size={30}
                  color="#fff"
                />
              }
              title="cars"
            />
            <CategoryItem
              key={"6"}
              Icon={
                <MaterialIcons
                  name="sports-tennis"
                  style={tw`p-3 bg-stone-800 shadow-md rounded-xl w-min-c `}
                  size={30}
                  color="#fff"
                />
              }
              title="sports"
            />
            <CategoryItem
              key={"7"}
              Icon={
                <IonicIcons
                  name="bed-outline"
                  style={tw`p-3 bg-stone-800 shadow-md rounded-xl w-min-c `}
                  size={30}
                  color="#fff"
                />
              }
              title="bed"
            />
          </ScrollView>
        </View>
        <View style={tw`mt-2`}>
          {isLoading && (
            <ActivityIndicator
              style={{
                height: "60%",
                alignItems: "center",
                justifyContent: "center",
              }}
              color={"#131313"}
              size={"large"}
            />
          )}
          {!isLoading && (
            <View>
              <FlatList
                data={productsData}
                renderItem={({
                  item: product,
                }: ListRenderItemInfo<IProduct>) => (
                  <ProductCard
                    imageUrl={product.images?.[1]}
                    price={`$ ${product?.price}`}
                    title={product?.title}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
      {/* <NavigationButtons navData={navigationLinks} navigation={navigation} /> */}
    </>
  );
};

export default Home;
