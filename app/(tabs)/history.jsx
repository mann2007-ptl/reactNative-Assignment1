import React, { useState } from "react";

import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from "react-native";

export default function HistoryScreen() {

    const surveyData = [
        {
            id: "1",
            siteName: "ABC Construction Site",
            client: "Reliance Industries",
            priority: "High",
            date: "18-07-2026"
        },
        {
            id: "2",
            siteName: "Green Valley Residency",
            client: "Adani Realty",
            priority: "Medium",
            date: "16-07-2026"
        },
        {
            id: "3",
            siteName: "Skyline Business Park",
            client: "Tata Projects",
            priority: "Low",
            date: "14-07-2026"
        }
    ];

    const [surveys, setSurveys] = useState(surveyData);
    const [search, setSearch] = useState("");

    const searchSurvey = (text) => {

        setSearch(text);

        if (text === "") {
            setSurveys(surveyData);
            return;
        }

        const filtered = surveyData.filter(item =>
            item.siteName.toLowerCase().includes(text.toLowerCase())
        );

        setSurveys(filtered);

    };


    const filterPriority = (priority) => {

        if (priority === "All") {
            setSurveys(surveyData);
            return;
        }

        const filtered = surveyData.filter(item =>
            item.priority === priority
        );

        setSurveys(filtered);

    };


    const viewSurvey = (item) => {

        Alert.alert(
            "Survey Details",
            `Site: ${item.siteName}

Client: ${item.client}

Priority: ${item.priority}

Date: ${item.date}`
        );

    };


    const deleteSurvey = (id) => {

        Alert.alert(
            "Delete Survey",
            "Are you sure you want to delete this survey?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {

                        const updated =
                            surveys.filter(item => item.id !== id);

                        setSurveys(updated);

                    }
                }
            ]
        );

    };


    const renderItem = ({ item }) => (

        <View style={styles.card}>

            <Text style={styles.site}>
                {item.siteName}
            </Text>

            <Text>
                Client : {item.client}
            </Text>

            <Text>
                Priority : {item.priority}
            </Text>

            <Text>
                Date : {item.date}
            </Text>

            <TouchableOpacity
                style={styles.viewButton}
                onPress={() => viewSurvey(item)}
            >
                <Text style={styles.buttonText}>
                    View Survey
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteSurvey(item.id)}
            >
                <Text style={styles.buttonText}>
                    Delete Survey
                </Text>
            </TouchableOpacity>

        </View>

    );


    return (

        <View style={styles.container}>

            <Text style={styles.heading}>
                Survey History
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Search Survey"
                value={search}
                onChangeText={searchSurvey}
            />

            <View style={styles.filterContainer}>

                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => filterPriority("All")}
                >
                    <Text style={styles.filterText}>
                        All
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => filterPriority("High")}
                >
                    <Text style={styles.filterText}>
                        High
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => filterPriority("Medium")}
                >
                    <Text style={styles.filterText}>
                        Medium
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => filterPriority("Low")}
                >
                    <Text style={styles.filterText}>
                        Low
                    </Text>
                </TouchableOpacity>

            </View>

            <FlatList
                data={surveys}
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

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "white",
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 15
    },

    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },

    filterButton: {
        backgroundColor: "#2563EB",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8
    },

    filterText: {
        color: "white",
        fontWeight: "bold"
    },

    card: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        elevation: 3
    },

    site: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8
    },

    viewButton: {
        backgroundColor: "#16A34A",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 15
    },

    deleteButton: {
        backgroundColor: "#DC2626",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10
    },

    buttonText: {
        color: "white",
        fontWeight: "bold"
    }

}); 