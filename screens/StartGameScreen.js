import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View style={styles.btnContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    borderRadius: 8,
    backgroundColor: "#4e0329",

    // Shadow for Android
    elevation: 4,

    // Shadow for IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 50,
    width: 60,
    fontSize: 32,
    marginVertical: 8,
    borderBottomWidth: 2,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ddb52f",
    borderBottomColor: "#ddb52f",
  },

  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
