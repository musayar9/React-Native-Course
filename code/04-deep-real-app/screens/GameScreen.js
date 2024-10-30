import {Alert, StyleSheet, View} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react"
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)

    } else {
        return rndNum
    }

}
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({userNumber, onGameOver}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            console.log("Game Over")
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver]);
    const nextGuessHandler = (direction) => {

        if ((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)) {
            Alert.alert("Don't lie", "You know that this is wrong", [{text: "Sorry", style: "cancel"}])
            return

        }
        if (direction === "lower") {

            maxBoundary = currentGuess

        } else {
            // burada currentGuess + 1 dememizin neden aynı sayıyı tekrar seçmemesi için
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber)
    }
    console.log(currentGuess, "currentGuess")

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/*    Guess*/}
            <NumberContainer>
                {currentGuess}
            </NumberContainer>

            <Card>
                <InstructionText>Higher or Lower</InstructionText>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler("lower")}>-</PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler("greater")}>+</PrimaryButton>

                    {/*
                buttonları burada bind ile de yapabiliriz aynı sonucu verir
                 <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
                */}
                </View>
            </Card>
        </View>

    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,


    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb52f",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#ddb52f",
        padding: 12,

    }

})