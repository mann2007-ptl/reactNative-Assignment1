import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    StyleSheet
} from "react-native";

import * as Clipboard from "expo-clipboard";

export default function ClipboardScreen() {

    const [notes, setNotes] = useState("");

    const surveyId = "SURVEY-2026-001";
    const contactNumber = "+91 9876543210";
    const currentLocation = "23.2156, 72.6369";

    const copyText = async (text, message) => {

        await Clipboard.setStringAsync(text);

        Alert.alert(
            "Success",
            message
        );

    };

    const pasteNotes = async () => {

        const text = await Clipboard.getStringAsync();

        setNotes(text);

    };

    const clearClipboard = async () => {

        await Clipboard.setStringAsync("");

        setNotes("");

        Alert.alert(
            "Success",
            "Clipboard cleared successfully"
        );

    };

    return (

        <View style={styles.container}>

            <Text style={styles.heading}>
                Clipboard Module
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    copyText(
                        surveyId,
                        "Survey ID copied successfully"
                    )
                }
            >
                <Text style={styles.buttonText}>
                    Copy Survey ID
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    copyText(
                        contactNumber,
                        "Contact Number copied successfully"
                    )
                }
            >
                <Text style={styles.buttonText}>
                    Copy Contact Number
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    copyText(
                        currentLocation,
                        "Current Location copied successfully"
                    )
                }
            >
                <Text style={styles.buttonText}>
                    Copy Current Location
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={pasteNotes}
            >
                <Text style={styles.buttonText}>
                    Paste Notes
                </Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Pasted text will appear here"
                multiline
                value={notes}
                onChangeText={setNotes}
            />

            <TouchableOpacity
                style={[styles.button, styles.clearButton]}
                onPress={clearClipboard}
            >
                <Text style={styles.buttonText}>
                    Clear Clipboard Data
                </Text>
            </TouchableOpacity>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
        padding: 20,
        alignItems: "center"
    },

    heading: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 30
    },

    button: {
        width: "90%",
        backgroundColor: "#2563EB",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 15
    },

    clearButton: {
        backgroundColor: "#DC2626"
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },

    input: {
        width: "90%",
        height: 140,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        textAlignVertical: "top",
        marginVertical: 20
    }

});