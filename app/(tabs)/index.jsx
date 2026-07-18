import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome </Text>
        <Text style={styles.appName}>Smart Field Survey & Inspection App</Text>
      </View>

      {/* Student Details */}
      <View style={styles.card}>
        <Text style={styles.title}>Student Details</Text>

        <Text style={styles.text}>Name : Mann Patel</Text>
        <Text style={styles.text}>Enrollment : 2301201070</Text>
        <Text style={styles.text}>Branch : Computer Engineering</Text>
        <Text style={styles.text}>Semester : 1</Text>
      </View>

      {/* Survey Count */}
      <View style={styles.countCard}>
        <Text style={styles.title}>Today's Survey Count</Text>

        <Text style={styles.count}>12</Text>

        <Text style={styles.smallText}>
          Surveys Completed Today
        </Text>
      </View>

      {/* Quick Actions */}
      <Text style={styles.section}>Quick Actions</Text>

      <View style={styles.row}>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => router.push("/survey")}
        >
          <Text style={styles.actionText}>Create Survey</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.actionCard}
        onPress={() => router.push("/camera")}>
          <Text style={styles.actionText}>Camera</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>

        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionText}>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionText}>Contacts</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>

        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionText}>Clipboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionText}>Profile</Text>
        </TouchableOpacity>

      </View>

      {/* Recent Survey */}
      <Text style={styles.section}>Recent Survey Summary</Text>

      <View style={styles.surveyCard}>
        <Text style={styles.surveyTitle}>Survey 1</Text>

        <Text>Site : ABC Construction</Text>

        <Text>Client : Reliance Ltd.</Text>

        <Text>Priority : High</Text>

        <Text>Date : 18 July 2026</Text>
      </View>

      <View style={styles.surveyCard}>
        <Text style={styles.surveyTitle}>Survey 2</Text>

        <Text>Site : Government School</Text>

        <Text>Client : Education Department</Text>

        <Text>Priority : Medium</Text>

        <Text>Date : 17 July 2026</Text>
      </View>

      <View style={styles.surveyCard}>
        <Text style={styles.surveyTitle}>Survey 3</Text>

        <Text>Site : Shopping Mall</Text>

        <Text>Client : D-Mart</Text>

        <Text>Priority : Low</Text>

        <Text>Date : 16 July 2026</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 15,
  },

  header: {
    backgroundColor: "#3F8EFC",
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 20,
  },

  welcome: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },

  appName: {
    fontSize: 16,
    color: "white",
    marginTop: 8,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    marginBottom: 6,
  },

  countCard: {
    backgroundColor: "#DFF6DD",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    elevation: 4,
  },

  count: {
    fontSize: 45,
    color: "green",
    fontWeight: "bold",
  },

  smallText: {
    fontSize: 16,
    color: "#444",
  },

  section: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  actionCard: {
    backgroundColor: "#3F8EFC",
    width: "48%",
    height: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  actionText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },

  surveyCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },

  surveyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3F8EFC",
  },

});