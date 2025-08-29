import { Ionicons } from "@expo/vector-icons"; // icon set
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  { id: "1", name: "All", icon: "bed-outline" },
  { id: "2", name: "Cupboard", icon: "cube-outline" },
  { id: "3", name: "phone", icon: "phone-portrait-outline" },
  { id: "4", name: "Light", icon: "bulb-outline" },
  { id: "5", name: "Sofa", icon: "tv-outline" },
];

export default function CategoryList({
  handleSearchButton,
}: {
  handleSearchButton: (id: string) => void;
}) {
  const [selected, setSelected] = useState("1"); // default selected Chair

  const renderItem = ({ item }: { item: (typeof categories)[0] }) => {
    const isActive = item.id === selected;
    return (
      <TouchableOpacity
        style={[styles.card, isActive && styles.activeCard]}
        onPress={() => {
          handleSearchButton(String(item.name).toLowerCase());
          setSelected(item.id);
        }}
      >
        <Ionicons
          name={item.icon as any}
          size={30}
          color={isActive ? "#fff" : "#555"}
        />
        <Text style={[styles.label, isActive && styles.activeLabel]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ marginVertical: 5 }}>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    marginLeft: 10,
  },
  card: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  activeCard: {
    backgroundColor: "linear-gradient(135deg, #3b82f6, #06b6d4)", // gradient won't work directly in RN
    // backgroundColor: "#3b82f6", // fallback blue
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    color: "#555",
  },
  activeLabel: {
    color: "#fff",
    fontWeight: "600",
  },
});
