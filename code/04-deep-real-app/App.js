import {useState} from "react"
import {ImageBackground, StyleSheet} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
    }


    return (
        <LinearGradient colors={["#4e0329", "#ddb52f",]} style={styles.rootScreen}>
            <ImageBackground resizeMode={"cover"} style={styles.rootScreen}
                             imageStyle={styles.backgroundImage}
                             source={require("./assets/images/background.png")}>
                {/*<StartGameScreen />*/}
                {userNumber ? <GameScreen/> : <StartGameScreen onPickNumber={pickedNumberHandler}/>}
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
