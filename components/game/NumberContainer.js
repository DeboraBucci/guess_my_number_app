import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    margin: 24,
    padding: 24,
    borderRadius: 8,
    borderColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
  numText: {
    fontSize: 36,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
