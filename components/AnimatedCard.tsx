import { Product } from "@/utils/api";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import MovieCard from "./MovieCard";

export default function AnimatedMovieCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 900,
      delay: index * 100, // stagger
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  return (
    <Animated.View
      style={{
        opacity: anim,
        transform: [{ translateY }],
        marginBottom: 16,
      }}
    >
      <MovieCard product={product} />
    </Animated.View>
  );
}
