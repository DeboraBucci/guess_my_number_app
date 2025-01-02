import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.accent500,
    color: Colors.accent500,
    textAlign: "center",
    fontWeight: "bold",
  },
});
