import React from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from "react-native";

const surveyData = [
    {
        id: "1",
        siteName: "ABC Construction Site",
        client: "Reliance Industries",
        photo: "https://res.cloudinary.com/dovyiuzjv/image/upload/v1784368859/scott-blake-x-ghf9LjrVg-unsplash_pmie89.jpg",
        contact: {
            name: "Rahul Patel",
            number: "9876543210"
        },
        location: {
            latitude: "23.2156",
            longitude: "72.6369"
        },
        notes: "Site inspection completed successfully."
    },
    {
        id: "2",
        siteName: "Green Valley Residency",
        client: "Adani Realty",
        photo: "https://picsum.photos/id/1025/400/300",
        contact: {
            name: "Priya Shah",
            number: "9123456780"
        },
        location: {
            latitude: "22.3072",
            longitude: "73.1812"
        },
        notes: "Foundation work is in progress."
    },
    {
        id: "3",
        siteName: "Skyline Business Park",
        client: "Tata Projects",
        photo: "https://picsum.photos/id/1043/400/300",
        contact: {
            name: "Amit Joshi",
            number: "9988776655"
        },
        location: {
            latitude: "19.0760",
            longitude: "72.8777"
        },
        notes: "Electrical inspection completed."
    }
];

export default function PreviewScreen() {

    const editSurvey = () => {
        Alert.alert(
            "Edit Survey",
            "Navigate to Survey Form"
        );
    };

    const submitSurvey = () => {
        Alert.alert(
            "Success",
            "Survey Submitted Successfully"
        );
    };

    const renderItem = ({ item }) => (

        <View style={styles.card}>

            <Text style={styles.label}>
                Site Name
            </Text>

            <Text style={styles.value}>
                {item.siteName}
            </Text>

            <Text style={styles.label}>
                Client
            </Text>

            <Text style={styles.value}>
                {item.client}
            </Text>

            <Text style={styles.label}>
                Photo
            </Text>

            <Image
                source={{ uri: item.photo }}
                style={styles.image}
            />

            <Text style={styles.label}>
                Contact
            </Text>

            <Text style={styles.value}>
                {item.contact.name}
            </Text>

            <Text style={styles.value}>
                {item.contact.number}
            </Text>

            <Text style={styles.label}>
                Location
            </Text>

            <Text style={styles.value}>
                Latitude : {item.location.latitude}
            </Text>

            <Text style={styles.value}>
                Longitude : {item.location.longitude}
            </Text>

            <Text style={styles.label}>
                Notes
            </Text>

            <Text style={styles.value}>
                {item.notes}
            </Text>

            <TouchableOpacity
                style={styles.editButton}
                onPress={editSurvey}
            >
                <Text style={styles.buttonText}>
                    Edit Survey
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.submitButton}
                onPress={submitSurvey}
            >
                <Text style={styles.buttonText}>
                    Submit Survey
                </Text>
            </TouchableOpacity>

        </View>

    );

    return (

        <View style={styles.container}>

            <Text style={styles.heading}>
                Survey Preview
            </Text>

            <FlatList
                data={surveyData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
        padding: 15
    },

    heading: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },

    card: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        elevation: 4
    },

    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10
    },

    value: {
        fontSize: 15,
        marginTop: 4
    },

    image: {
        width: "100%",
        height: 220,
        borderRadius: 10,
        marginTop: 10
    },

    editButton: {
        backgroundColor: "#2563EB",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20
    },

    submitButton: {
        backgroundColor: "#16A34A",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 15,
        marginBottom: 5
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }

});