import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    Alert,
    RefreshControl,
    StyleSheet
} from "react-native";

import * as Contacts from "expo-contacts";
import * as Clipboard from "expo-clipboard";

export default function ContactsScreen() {

    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [search, setSearch] = useState("");
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = async () => {

        const permission =
            await Contacts.requestPermissionsAsync();

        if (permission.status !== "granted") {

            Alert.alert(
                "Permission Denied",
                "Contacts permission is required"
            );

            return;
        }

        const { data } =
            await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers]
            });

        setContacts(data);
        setFilteredContacts(data);
    };

    const searchContact = (text) => {

        setSearch(text);

        const result = contacts.filter((contact) =>
            contact.name.toLowerCase().includes(text.toLowerCase())
        );

        setFilteredContacts(result);
    };

    const copyNumber = async (contact) => {

        const number =
            contact.phoneNumbers?.[0]?.number || "No Number";

        await Clipboard.setStringAsync(number);

        Alert.alert(
            "Success",
            "Contact number copied"
        );
    };

    const onRefresh = async () => {

        setRefreshing(true);

        await getContacts();

        setRefreshing(false);
    };

    const renderItem = ({ item }) => (

        <TouchableOpacity
            style={styles.card}
            onPress={() => copyNumber(item)}
        >

            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {item.name?.charAt(0).toUpperCase()}
                </Text>
            </View>

            <View style={{ flex: 1 }}>

                <Text style={styles.name}>
                    {item.name}
                </Text>

                <Text style={styles.number}>
                    {item.phoneNumbers?.[0]?.number || "No Number"}
                </Text>

            </View>

        </TouchableOpacity>
    );

    return (

        <View style={styles.container}>

            <Text style={styles.heading}>
                Contacts Module
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Search Contact"
                value={search}
                onChangeText={searchContact}
            />

            <Text style={styles.counter}>
                Total Contacts : {filteredContacts.length}
            </Text>

            {
                filteredContacts.length === 0 ?

                <View style={styles.emptyContainer}>

                    <Text style={styles.emptyText}>
                        No Contacts Found
                    </Text>

                </View>

                :

                <FlatList
                    data={filteredContacts}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />

            }

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
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 15
    },

    counter: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 15
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 3
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#2563EB",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15
    },

    avatarText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },

    name: {
        fontSize: 16,
        fontWeight: "bold"
    },

    number: {
        color: "gray",
        marginTop: 5
    },

    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    emptyText: {
        fontSize: 20,
        color: "gray"
    }

});