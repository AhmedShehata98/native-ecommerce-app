import { NavigationContainer } from "@react-navigation/native";

import NavigationTabs from "./src/Tabs/NavigationTabs";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
}
