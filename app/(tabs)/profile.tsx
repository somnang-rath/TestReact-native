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
          source={{
            uri: "data:image/webp;base64,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",
          }}
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
