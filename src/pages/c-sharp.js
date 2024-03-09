import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Csharp() {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <View style={styles.container}>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={"Yc5wSAaerwU"}
                onChangeState={onStateChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    }
})