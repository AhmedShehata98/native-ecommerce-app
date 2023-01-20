import { View, Text } from "react-native";
import React from "react";
import Starting from "../screens/Starting";
import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";
import Profile from "../screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Cart from "../screens/Cart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavigationTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="starting"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = "";
          switch (route.name) {
            case "home":
              iconName = "home";
              break;
            case "profile":
              iconName = "user-circle";
              break;
            case "cart":
              iconName = "shopping-cart";
              break;
            case "productDetails":
              iconName = "product-hunt";
              break;
            default:
              iconName = "user-circle";
              break;
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#928f8f",
        tabBarItemStyle: { borderRadius: 50, padding: 5 },
        tabBarStyle: { height: 56 },
        tabBarIconStyle: { height: 25, width: 25 },
        tabBarActiveTintColor: "#0b0b0c",
        tabBarInactiveTintColor: "#636868",
        headerShown: false,
      })}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="productDetails" component={ProductDetails} />
      <Tabs.Screen name="cart" component={Cart} />
      <Tabs.Screen name="profile" component={Profile} />
    </Tabs.Navigator>
  );
};

export default NavigationTabs;
