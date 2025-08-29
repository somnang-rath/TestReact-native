import { clearCart } from "@/utils/api";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Payment() {
  const { Total } = useLocalSearchParams<{ Total: string }>();
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (cardNumber && cardHolderName && expiryDate && cvv) {
      Alert.alert("Payment Successful", "Your payment has been processed!");
      // Here you can also add logic to process the payment
      router.replace("/"); // Navigate back to home after payment
      clearCart();
    } else {
      Alert.alert("Payment Failed", "Please fill in all fields.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.header}>💳 Payment Page</Text>
        <Text style={styles.total}>Total: ${Total}</Text>
        <TextInput
          value={cardNumber}
          onChangeText={setCardNumber}
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          placeholderTextColor="#888"
        />

        <TextInput
          value={cardHolderName}
          onChangeText={setCardHolderName}
          style={styles.input}
          placeholder="Card Holder Name"
          placeholderTextColor="#888"
        />

        <TextInput
          value={expiryDate}
          onChangeText={setExpiryDate}
          style={styles.input}
          placeholder="Expiry Date (MM/YY)"
          placeholderTextColor="#888"
        />

        <TextInput
          value={cvv}
          onChangeText={setCvv}
          style={styles.input}
          placeholder="CVV"
          keyboardType="numeric"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  total: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#000",
  },
  payButton: {
    backgroundColor: "#27ae60",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  payText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
