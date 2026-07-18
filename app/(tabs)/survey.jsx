import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function Survey() {

  const [siteName, setSiteName] = useState("");
  const [clientName, setClientName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);

    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const submitSurvey = () => {

    if (
      siteName === "" ||
      clientName === "" ||
      description === "" ||
      priority === ""
    ) {
      Alert.alert("Error", "Please fill all required fields.");
      return;
    }

    Alert.alert("Success", "Survey Submitted Successfully!");

    setSiteName("");
    setClientName("");
    setDescription("");
    setPriority("");
    setDate(new Date());
  };

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.heading}>
        Create Survey
      </Text>

      <Text style={styles.label}>
        Site Name
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Site Name"
        value={siteName}
        onChangeText={setSiteName}
      />

      <Text style={styles.label}>
        Client Name
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Client Name"
        value={clientName}
        onChangeText={setClientName}
      />

      <Text style={styles.label}>
        Description
      </Text>

      <TextInput
        style={styles.description}
        placeholder="Enter Description"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>
        Priority
      </Text>

      <View style={styles.priorityContainer}>

        <TouchableOpacity
          style={[
            styles.priorityButton,
            priority === "High" && styles.selected
          ]}
          onPress={() => setPriority("High")}
        >
          <Text
            style={[
              styles.priorityText,
              priority === "High" && styles.selectedText
            ]}
          >
            High
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.priorityButton,
            priority === "Medium" && styles.selected
          ]}
          onPress={() => setPriority("Medium")}
        >
          <Text
            style={[
              styles.priorityText,
              priority === "Medium" && styles.selectedText
            ]}
          >
            Medium
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.priorityButton,
            priority === "Low" && styles.selected
          ]}
          onPress={() => setPriority("Low")}
        >
          <Text
            style={[
              styles.priorityText,
              priority === "Low" && styles.selectedText
            ]}
          >
            Low
          </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.label}>
        Survey Date
      </Text>

      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShow(true)}
      >
        <Text style={styles.dateText}>
          Select Date
        </Text>
      </TouchableOpacity>

      <Text style={styles.selectedDate}>
        Selected Date :
        {" "}
        {date.toLocaleDateString()}
      </Text>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={submitSurvey}
      >
        <Text style={styles.submitText}>
          Submit Survey
        </Text>
      </TouchableOpacity>

    </ScrollView>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
    marginTop : 30
  },

  label: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 12,
    color: "#2C3E50",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },

  description: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    height: 120,
    textAlignVertical: "top",
  },

  priorityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },

  priorityButton: {
    width: "30%",
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3F8EFC",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  selected: {
    backgroundColor: "#3F8EFC",
  },

  priorityText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3F8EFC",
  },

  selectedText: {
    color: "#FFFFFF",
  },

  dateButton: {
    backgroundColor: "#3F8EFC",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  dateText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  selectedDate: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50",
  },

  submitButton: {
    backgroundColor: "green",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 35,
    marginBottom: 40,
  },

  submitText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

});