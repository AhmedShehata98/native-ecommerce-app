import { View, TouchableOpacity } from "react-native";
import { useLinkTo } from "@react-navigation/native";
import React from "react";
import tw from "twrnc";
export interface INavData {
  id: string;
  navIcon: React.ReactNode;
  navLink: string;
  navLabel?: string;
}

interface INavigationButtonsProps {
  navData: INavData[];
  navigation: any;
}
const NavigationButtons = ({
  navData,
  navigation,
}: INavigationButtonsProps) => {
  const goTo = useLinkTo();
  return (
    <View
      style={tw`absolute bottom-0 z-50 w-full justify-around border px-1 py-3 bg-gray-100 flex-row`}
    >
      {Array.isArray(navData) &&
        navData.map((nav) => (
          <TouchableOpacity
            key={nav.id}
            style={tw`text-xl`}
            onPress={() => navigation?.navigate("home", nav.navLink)}
          >
            {nav.navIcon}
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default NavigationButtons;
