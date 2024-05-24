import { LinearGradient } from "expo-linear-gradient";
import type { PropsWithChildren, ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";

type Props = PropsWithChildren<{
  //
}>;

export const BaseWrapper = ({ children }: Props) => {
  return (
    <LinearGradient
      colors={["#2C3135", "#24282D", "#191B1E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.baseContainer}
    >
      <ScrollView>{children}</ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
});
