import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { INavData } from "./src/components/NavigationButtons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import uuid from "react-native-uuid";
import tw from "twrnc";
import NavigationTabs from "./src/Tabs/NavigationTabs";
import Starting from "./src/screens/Starting";

export const navigationLinks: INavData[] = [
  {
    id: uuid.v4().toString(),
    navIcon: <FontAwesome style={tw`text-2xl`} name="user-o" />,
    navLink: "/profile",
  },
  {
    id: uuid.v4().toString(),
    navIcon: <Ionicons style={tw`text-2xl`} name="cart-outline" />,
    navLink: "/cart",
  },
  {
    id: uuid.v4().toString(),
    navIcon: <Ionicons style={tw`text-2xl`} name="ios-notifications-outline" />,
    navLink: "/notifications",
  },
  {
    id: uuid.v4().toString(),
    navIcon: <Ionicons style={tw`text-2xl`} name="home-outline" />,
    navLink: "/home",
  },
];
export default function App() {
  // const router = useRoute();
  // console.log(router.name);
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
}
