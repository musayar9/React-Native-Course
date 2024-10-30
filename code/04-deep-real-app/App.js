import {useState} from "react"
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true)
    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false)
    }

    const gameOverHandler = () => {
        setGameIsOver(true)
    }
    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500,]} style={styles.rootScreen}>
            <ImageBackground resizeMode={"cover"} style={styles.rootScreen}
                             imageStyle={styles.backgroundImage}
                             source={require("./assets/images/background.png")}>
                {/*<StartGameScreen />*/}
                <SafeAreaView style={styles.rootScreen}>
                    {gameIsOver && userNumber ? <GameOverScreen/> : <>
                        {userNumber ? <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/> :
                            <StartGameScreen onPickNumber={pickedNumberHandler}/>}

                    </>}

                </SafeAreaView>

            </ImageBackground>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15

    }
});
