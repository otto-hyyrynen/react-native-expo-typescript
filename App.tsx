import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import useCachedResources from 'hooks/useCachedResources';
import RootNavigator from 'navigation/RootNavigator';
import { store } from 'config/store';
import { AuthenticatedUserProvider } from 'navigation/AuthenticatedUserProvider';
import themeStyles from 'styles/theme.styles';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Posts App</Text>
        </View>
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <AuthenticatedUserProvider>
            <RootNavigator />
          </AuthenticatedUserProvider>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: themeStyles.SPACER_BASIC,
    padding: themeStyles.SPACER_MINI,
  },
  header: {
    fontSize: themeStyles.FONT_SIZE_EXTRA_LARGE,
    fontWeight: "600",
    color: themeStyles.FONT_COLOR_WHITE,
  },
});