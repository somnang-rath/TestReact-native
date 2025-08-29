import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, TextInput } from "react-native";

export default function SearchBar({
  showSearch,
  query,
  handleSearch,
}: {
  showSearch: boolean;
  query: string;
  handleSearch: (text: string) => void;
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-20)).current;
  const heightAnim = useRef(new Animated.Value(0)).current; // for maxHeight

  useEffect(() => {
    if (showSearch) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(heightAnim, {
          toValue: 50, // maxHeight
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -20,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(heightAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [showSearch]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          maxHeight: heightAnim,
        },
      ]}
    >
      <TextInput
        placeholder="Search products..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    overflow: "hidden", // needed for collapse animation
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});
