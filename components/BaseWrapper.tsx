import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "expo-router";
import { useRef, type PropsWithChildren, type ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";

type Props = PropsWithChildren<{
  //
}>;

export const BaseWrapper = ({ children }: Props) => {
  const ref = useRef<ScrollView>(null);

  useFocusEffect(() => {
    ref.current?.scrollTo({ y: 0, animated: true });
  });

  return (
    <LinearGradient
      colors={["#2C3135", "#24282D", "#191B1E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.baseContainer}
    >
      <ScrollView ref={ref}>{children}</ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
});
