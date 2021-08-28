import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthenticatedUserContext } from "./AuthenticatedUserProvider";
import LoginStack from "./LoginStack";
import HomeStack from "./HomeStack";

export default function RootNavigator() {
  const user = useContext(AuthenticatedUserContext);

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <LoginStack />}
    </NavigationContainer>
  );
}
