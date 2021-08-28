import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// More icons: https://icons.expo.fyi

interface Props {
  leftIcon?: string;
  rightIcon?: string;
  inputStyle?: any;
  iconColor?: string;
  containerStyle?: any;
  placeholderTextColor?: string;
  handlePasswordVisibility: () => {};
  [x: string]: any;
}

// ...rest props can also be handled through component declaration: 
// const InputField: React.FC<Props & Record<string, any>> = ({})

const InputField: React.FC<Props & Record<string, any>> = ({
  leftIcon,
  iconColor = "#000",
  rightIcon,
  inputStyle,
  containerStyle,
  placeholderTextColor = "#444",
  handlePasswordVisibility,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon ? (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={iconColor}
          style={styles.leftIcon}
        />
      ) : null}
      <TextInput
        {...rest}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, inputStyle]}
      />
      {rightIcon ? (
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={20}
            color={iconColor}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: "row",
    padding: 12,
  },
  leftIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    width: "100%",
    fontSize: 18,
  },
  rightIcon: {
    alignSelf: "center",
    marginLeft: 10,
  },
});

export default InputField;
