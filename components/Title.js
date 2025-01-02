import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 12,
    borderWidth: 2,
    borderColor: "#ddb52f",
    color: "#ddb52f",
    textAlign: "center",
    fontWeight: "bold",
  },
});