import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Spinner from "../../components/Spinner";

import { useGetPostsQuery } from "../../services/posts";
import themeStyles from "../../styles/theme.styles";

const PostList = () => {
  const { data: posts, isLoading } = useGetPostsQuery();

  if (!posts) {
    return (
      <View style={[loaderStyles.container, loaderStyles.horizontal]}>
        <Text>No posts :(</Text>
      </View>
    );
  }

  return (
    <Spinner loading={isLoading}>
      <View style={postListStyles.container}>
        {posts.map(({ id, title }) => (
          <View key={id} style={postListStyles.item}>
            <Text>{title}</Text>
          </View>
        ))}
      </View>
    </Spinner>
  );
};

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

const postListStyles = StyleSheet.create({
  container: {
    padding: themeStyles.SPACER_MINI,
  },
  item: {
    backgroundColor: themeStyles.COLORS.SECONDARY_COLOR,
    margin: themeStyles.SPACER_SOLO,
    padding: themeStyles.SPACER_MINI,
  },
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Posts</Text>
      </View>
      <ScrollView>
        <PostList />
      </ScrollView>
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
  headerContainer: {
    marginTop: themeStyles.SPACER_BASIC,
    padding: themeStyles.SPACER_MINI,
  },
  header: {
    fontSize: themeStyles.FONT_SIZE_EXTRA_LARGE,
    fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
    color: themeStyles.FONT_COLOR_WHITE,
  },
});
