import { Product } from "@/utils/api";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        router.push({
          pathname: "/movie/[id]",
          params: { id: String(product.id), name: product.name }, // id must be string
        })
      }
      activeOpacity={0.8}
    >
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: product.image }}
            style={styles.posterImage}
            resizeMode="cover"
          />
          <Ionicons
            name="play"
            size={20}
            color="white"
            style={styles.playIcon}
          />
          <View style={styles.ratingOverlay}>
            <View style={styles.ratingRow}>
              <Text style={styles.star}>⭐</Text>
              <Text style={styles.ratingText}>{product.price}</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.year}>$ {product.price}</Text>
          </View>
          <View>
            <Text style={styles.duration}>{product.stock}</Text>
            {/* <Text style={styles.year}>{product.description}</Text> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: "#D1D5DB", // gray-300
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  imageWrapper: {
    position: "relative",
  },
  posterImage: {
    height: 192, // h-48
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  playIcon: {
    position: "absolute",
    right: 12,
    top: 12,
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: "rgba(220, 38, 38, 0.7)", // red-700/70
    padding: 8,
    textAlign: "center",
    textAlignVertical: "center",
  },
  ratingOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    // backgroundColor: "rgba(0,0,0,0.6)", // gradient approximation
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 15,
    color: "#FBBF24", // yellow-400
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "600",
    color: "#FBBF24",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#FEF3C7", // amber-50
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3,
    marginVertical: 0,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  year: {
    fontSize: 14,
    fontWeight: "700",
  },
  duration: {
    fontSize: 16,
    // color: "#4B5563", // gray-600
  },
});
