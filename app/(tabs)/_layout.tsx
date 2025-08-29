import "@/global.css";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarBackground: () => (
          <BlurView
            intensity={30} // blur level (10 = small, 50 = strong)
            tint="light" // light | dark | default
            style={{ flex: 1, borderRadius: 20, overflow: "hidden" }}
          />
        ),
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          backgroundColor: "transparent",
        },
        animation: "fade",
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                global.toggleSearch?.();
              }}
            >
              <Ionicons
                name="search"
                color="#2563EB"
                size={24}
                style={{ marginRight: 12 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="cartpage"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: true,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
