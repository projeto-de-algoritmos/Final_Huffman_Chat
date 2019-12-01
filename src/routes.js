import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ChatScreen from "./pages/ChatScreen";
import Login from "./pages/Login";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      ChatScreen
    },
    {
      headerLayoutPreset: "center",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#7700ff"
        },
        headerTintColor: "#FFF"
      }
    }
  )
);

export default Routes;
