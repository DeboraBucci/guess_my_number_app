import { StyleSheet, Text, View, StatusBar, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1,
  maxBoundary = 100;

const GameScreen = ({ pickedNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(minBoundary, maxBoundary, pickedNumber)
  );

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      onGameOver();
    }
  }, [currentGuess, pickedNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "higher" && currentGuess > pickedNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card title="Higher or Lower?">
        <View style={styles.btnsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: StatusBar.currentHeight + 32,
  },

  btnsContainer: {
    padding: 16,
    flexDirection: "row",
  },
});
