import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    StyleSheet
} from "react-native";

import * as Location from "expo-location";
import * as Clipboard from "expo-clipboard";


export default function LocationScreen() {

    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);


    const getLocation = async () => {

        try {

            setLoading(true);

            const permission = 
                await Location.requestForegroundPermissionsAsync();

            if (permission.status !== "granted") {

                Alert.alert(
                    "Permission Denied",
                    "Location permission is required"
                );

                setLoading(false);
                return;
            }


            const currentLocation =
                await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.High
                });


            setLocation(currentLocation);

        }
        catch(error) {

            Alert.alert(
                "Error",
                "Unable to fetch location"
            );

        }
        finally {

            setLoading(false);

        }

    };


    const copyLocation = async () => {

        if (!location) {

            Alert.alert(
                "Error",
                "Please refresh location first"
            );

            return;
        }


        const data =
`Latitude: ${location.coords.latitude}
Longitude: ${location.coords.longitude}
Accuracy: ${location.coords.accuracy} meters`;


        await Clipboard.setStringAsync(data);


        Alert.alert(
            "Success",
            "Current location copied"
        );

    };


    return (

        <View style={styles.container}>

            <Text style={styles.heading}>
                Location Module
            </Text>


            {
                loading &&
                <ActivityIndicator size="large" />
            }


            {
                location &&
                <View style={styles.card}>

                    <Text style={styles.label}>
                        Latitude
                    </Text>

                    <Text>
                        {location.coords.latitude}
                    </Text>


                    <Text style={styles.label}>
                        Longitude
                    </Text>

                    <Text>
                        {location.coords.longitude}
                    </Text>


                    <Text style={styles.label}>
                        Accuracy
                    </Text>

                    <Text>
                        {location.coords.accuracy} meters
                    </Text>

                </View>
            }


            <TouchableOpacity
                style={styles.button}
                onPress={getLocation}
            >

                <Text style={styles.buttonText}>
                    Refresh Location
                </Text>

            </TouchableOpacity>


            <TouchableOpacity
                style={styles.button}
                onPress={copyLocation}
            >

                <Text style={styles.buttonText}>
                    Copy Current Location
                </Text>

            </TouchableOpacity>

        </View>

    );

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
        alignItems: "center",
        padding: 20
    },

    heading: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 30
    },

    card: {
        width: "90%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        elevation: 5
    },

    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 15
    },

    button: {
        width: "90%",
        backgroundColor: "#2563EB",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 20
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }

});