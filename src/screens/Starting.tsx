import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Starting = ({ navigation }: any) => {
  return (
    <SafeAreaView style={tw.style("w-full", "h-full")}>
      <StatusBar backgroundColor={"#8e90905c"} style="auto" animated />
      <ImageBackground
        source={require("../../assets/sartung-screen.jpg")}
        style={tw`w-full h-full`}
      >
        <View style={tw`absolute inset-0 `}>
          <Text
            style={tw`text-gray-700 text-4xl font-bold uppercase mt-8 pt-10 px-8`}
          >
            make your home beautiful
          </Text>
          <Text
            style={tw` text-slate-500 text-base font-bold capitalize mt-7 px-8`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            recusandae numquam debitis quasi consequatur illum!
          </Text>
          <View
            style={tw`absolute bottom-0 left-0 flex justify-center items-center flex-row w-full h-42 px-8`}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("home")}
              style={tw`justify-center items-center bg-gray-800 w-full px-4 py-4 rounded-md shadow-md`}
            >
              <Text style={tw` text-white text-xl capitalize`}>
                get started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Starting;
