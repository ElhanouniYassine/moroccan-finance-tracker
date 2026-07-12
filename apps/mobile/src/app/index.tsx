import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Salam, boss 👋</Text>
      <Text style={styles.subtitle}>Here is your money situation this month.</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Remaining this month</Text>
        <Text style={styles.bigAmount}>8,450 MAD</Text>
        <Text style={styles.cardHint}>18 days left · 469 MAD/day safe spending</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.cardLabel}>Spent</Text>
          <Text style={styles.amount}>5,550 MAD</Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.cardLabel}>Saved</Text>
          <Text style={styles.amount}>2,000 MAD</Text>
        </View>
        
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Warnings</Text>
        <Text style={styles.warning}>You spent 72% of your café budget.</Text>
        <Text style={styles.warning}>Transport is higher than usual this month.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recent transactions</Text>
        <Text style={styles.transaction}>Taxi · 35 MAD</Text>
        <Text style={styles.transaction}>9hwa · 18 MAD</Text>
        <Text style={styles.transaction}>Marjane · 240 MAD</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FAFAF1",
  },
  content: {
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#171717",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E8E3D5",
  },
  cardLabel: {
    fontSize: 14,
    color: "#777",
  },
  bigAmount: {
    fontSize: 36,
    fontWeight: "900",
    marginTop: 8,
    color: "#171717",
  },
  cardHint: {
    marginTop: 6,
    color: "#777",
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  smallCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E8E3D5",
  },
  amount: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 6,
    color: "#171717",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 10,
    color: "#171717",
  },
  warning: {
    fontSize: 15,
    marginBottom: 6,
    color: "#f3bf32",
  },
  transaction: {
    fontSize: 15,
    marginBottom: 8,
    color: "#333",
  },
});