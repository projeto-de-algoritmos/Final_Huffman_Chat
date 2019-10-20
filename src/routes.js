import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ChatScreen from "./pages/ChatScreen";
import Login from "./pages/Login";

const Routes = createAppContainer(
  createStackNavigator({
    Login,
    ChatScreen
  })
);

export default Routes;
