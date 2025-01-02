import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  const pickedNumberHandler = (pickedNum) => {
    setPickedNumber(pickedNum);
  };

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        onPickNumber={pickedNumberHandler}
      >
        {!pickedNumber && (
          <StartGameScreen onPickNumber={pickedNumberHandler} />
        )}
        {pickedNumber && <GameScreen />}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
