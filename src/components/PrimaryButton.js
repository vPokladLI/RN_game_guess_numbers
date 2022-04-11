import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// create a component
const PrimaryButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {},
});

//make this component available to the app
export default PrimaryButton;
