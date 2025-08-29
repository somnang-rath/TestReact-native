import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/120" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>

      {/* Info Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Membership</Text>
          <Text style={styles.cardValue}>Premium</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tickets Purchased</Text>
          <Text style={styles.cardValue}>12</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Favorite Genre</Text>
          <Text style={styles.cardValue}>Action</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => router.push("/signin")}>
        <Text style={{ textAlign: "right", padding: 20, color: "#fff" }}>
          Sign In
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#2980b9",
  },
  topTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  editButton: {
    padding: 6,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  email: {
    fontSize: 16,
    color: "#f0f0f0",
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    flex: 1,
  },
  card: {
    backgroundColor: "#ecf0f1",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
