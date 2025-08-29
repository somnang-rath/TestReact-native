import { addToCart, getProducts, Product } from "@/utils/api";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const products = await getProducts();
        const found = products.find((m) => m.id.toString() === id);
        setProduct(found || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Product not found 😢</Text>
      </View>
    );
  }
  const handleAddToCart = async () => {
    if (!product) return;

    const updatedCart = await addToCart(
      product.id,
      product.name,
      product.price,
      1, // default quantity
      product.image
    );

    alert(`✅ ${product.name} added to cart!`);
  };
  return (
    <>
      <Stack.Screen options={{ title: product.name }} />
      <ScrollView style={styles.container}>
        {/* Poster */}
        <Image
          source={{ uri: product.image }}
          style={styles.poster}
          resizeMode="cover"
        />

        {/* Title & Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.subTitle}>
            {product.category} • {product.price} • {product.stock}
          </Text>
          <Text style={styles.rating}>⭐ {product.price}</Text>
        </View>

        {/* Director & Cast */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Model</Text>
          <Text style={styles.sectionContent}>{product.category}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Brand</Text>
          <Text style={styles.sectionContent}>{product?.brand}</Text>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.sectionContent}>{product.description}</Text>
        </View>
        {/* Add to Cart / Payment Button */}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3498db" }]}
          onPress={() =>
            router.push({
              pathname: "/payment",
              params: { Total: product.price },
            })
          }
        >
          <Text style={styles.buttonText}>Go to Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#27ae60" }]}
          onPress={() => handleAddToCart()}
        >
          <Text style={styles.buttonText}>💳 Add to Cart / Pay</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row", // buttons side by side
    justifyContent: "space-around",
    marginBottom: 30,
    width: "100%",
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: "#fff",
  },
  button: {
    flex: 0.45, // take 45% width each
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6", // gray-100
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#EF4444", // red-500
  },
  poster: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  infoContainer: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: -30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 6,
  },
  rating: {
    fontSize: 18,
    color: "#FBBF24", // yellow-400
    fontWeight: "600",
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2563EB", // blue-500
    marginBottom: 4,
  },
  sectionContent: {
    fontSize: 14,
    color: "#374151", // gray-700
    lineHeight: 20,
  },
});
