import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import themeStyles from "../styles/theme.styles";

const Spinner = ({ loading, children }) =>
  loading ? (
    <View style={[loaderStyles.container, loaderStyles.horizontal]}>
      <ActivityIndicator
        size="large"
        color={themeStyles.COLORS.SECONDARY_COLOR}
      />
    </View>
  ) : (
    children
  );

const loaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: themeStyles.SPACER_SOLO,
  },
});

export default Spinner;
