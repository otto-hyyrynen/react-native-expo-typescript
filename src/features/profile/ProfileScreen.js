import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

import { IconButton } from "../../components";
import Firebase from "../../config/firebase";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";
import themeStyles from "../../styles/theme.styles";

const auth = Firebase.auth();

export default function HomeScreen() {
  const { user } = useContext(AuthenticatedUserContext);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.column}>
        <Text style={styles.title}>Welcome {user.email}!</Text>
        <IconButton
          name="logout"
          size={24}
          color="#fff"
          onPress={handleSignOut}
        />
      </View>
      <Text style={styles.text}>Your UID is: {user.uid} </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyles.PRIMARY_COLOR,
    paddingTop: themeStyles.SPACER_LARGE,
    paddingHorizontal: themeStyles.SPACER_MINI,
  },
  column: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: themeStyles.SPACER_BASIC,
  },
  title: {
    fontSize: themeStyles.FONT_SIZE_EXTRA_LARGE,
    fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
    color: themeStyles.FONT_COLOR_WHITE,
  },
  text: {
    fontSize: themeStyles.FONT_SIZE_LARGE,
    fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
    color: themeStyles.FONT_COLOR_WHITE,
  },
});
