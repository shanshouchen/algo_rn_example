import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from "react";
import CCode from 'react-native-ccode'

export default function App() {
    const [result, setResult] = useState("");

    function randomRange(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

    }

    return (
        <View style={styles.container}>
            <Text onPress={async () => {
                try {
                    const res = await CCode.multiply(randomRange(1, 10), 2);
                    setResult(res.result)
                } catch (e) {
                    console.warn(e.message || e);
                }
            }}>Click for test!!</Text>
            <StatusBar style="auto"/>
            <Text>Result: {result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
