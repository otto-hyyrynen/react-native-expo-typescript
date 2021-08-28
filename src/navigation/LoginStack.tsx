import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../features/login/LoginScreen";
import SignupScreen from "../features/login/SignupScreen";

export type LoginStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
