import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children, title }) => {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    borderRadius: 8,
    backgroundColor: Colors.primary800,

    // Shadow for Android
    elevation: 4,

    // Shadow for IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  title: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
