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
  const handlePayment = () => {
    Alert.alert("Payment Successful", "Your payment has been processed!");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.header}>💳 Payment Page</Text>

        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Expiry Date (MM/YY)"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="CVV"
          // keyboardType="numeric"
          placeholderTextColor="#888"
          // secureTextEntry
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
