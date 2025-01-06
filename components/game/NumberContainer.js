import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24, // ternary operator for styles
    borderRadius: 8,
    borderColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
  numText: {
    fontSize: deviceWidth < 380 ? 28 : 36,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
