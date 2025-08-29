import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
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
  const [selected, setSelected] = useState("1");

  const renderItem = ({ item }: { item: (typeof categories)[0] }) => {
    const isActive = item.id === selected;

    const CardContent = (
      <>
        <Ionicons
          name={item.icon as any}
          size={20}
          color={isActive ? "#fff" : "#555"}
        />
        <Text style={[styles.label, isActive && styles.activeLabel]}>
          {item.name}
        </Text>
      </>
    );

    return (
      <BlurView
        intensity={0} // blur level (10 = small, 50 = strong)
        tint="light" // light | dark | default
        style={{ flex: 1, overflow: "hidden" }}
      >
        <TouchableOpacity
          style={{ marginRight: 12 }}
          onPress={() => {
            handleSearchButton(String(item.name).toLowerCase());
            setSelected(item.id);
          }}
        >
          {isActive ? (
            <LinearGradient
              colors={["#3b82f6", "#06b6d4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.card]}
            >
              {CardContent}
            </LinearGradient>
          ) : (
            <View style={styles.card}>{CardContent}</View>
          )}
        </TouchableOpacity>
      </BlurView>
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
  card: {
    width: 80,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    // shadowColor: "#000",
    // shadowOpacity: 0.05,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 4,
    // elevation: 3,
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
