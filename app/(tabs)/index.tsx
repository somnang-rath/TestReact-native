// src/screens/HomeScreen.tsx
import AnimatedMovieCard from "@/components/AnimatedCard";
import ButtomList from "@/components/ButtomList";
import { getProducts, Product, searchProducts } from "@/utils/api";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  // Load all products initially
  const loadProducts = async () => {
    try {
      setLoading(true);
      const productData = await getProducts();
      setProducts(productData);
    } catch (err) {
      console.error("Error loading products:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    global.toggleSearch = () => setShowSearch((prev) => !prev);

    return () => {
      global.toggleSearch = undefined; // clean up
    };
  }, []);

  // Search movies by query
  const handleSearch = async (text: string) => {
    setQuery(text);
    if (text.trim() === "") {
      loadProducts(); // if input is empty, show all products
    } else {
      try {
        setLoading(true);
        const filtered = await searchProducts(text, products);
        setProducts(filtered);
      } catch (err) {
        console.error("Error searching products:", err);
      } finally {
        setLoading(false);
      }
    }
  };
  const handleSearchButton = async (text: string) => {
    try {
      setLoading(true);
      const allProducts = await getProducts();
      if (text === "all") {
        setProducts(allProducts);
      } else {
        const store = allProducts.filter((item) => item.type === text);
        setProducts(store);
      }
    } catch (err) {
      console.error("Error searching products:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setShowSearch(false); // hide search input
        Keyboard.dismiss(); // dismiss keyboard if open
      }}
      accessible={false} // important to allow taps to propagate to children
    >
      <View style={styles.container}>
        {showSearch && (
          <TextInput
            placeholder="Search products..."
            placeholderTextColor="#888"
            value={query}
            onChangeText={handleSearch}
            style={styles.searchInput}
          />
        )}
        <ButtomList handleSearchButton={handleSearchButton} />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#2563EB"
            style={{ marginTop: 20 }}
          />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={({ item, index }) => (
              <AnimatedMovieCard product={item} index={index} />
            )}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: "#F3F4F6", // gray-100
  },
  searchInput: {
    color: "#1F1A1A",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#D1D5DB", // gray-300
  },
});
